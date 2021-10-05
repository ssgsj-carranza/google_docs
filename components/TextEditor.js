import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import {EditorState} from 'draft-js';
import { db } from '../firebase';
import { useRouter } from 'next/dist/client/router';
import {convertFromRaw, convertToRaw} from 'draft-js';
import { useSession } from 'next-auth/client';
// convert to raw converts to json storable format
import {useDocumentOnce} from 'react-firebase-hooks/firestore';
import { useEffect } from 'react';

//Use dynamic import to render editor on the client side not on the node js side, to avoid window is not define error
const Editor = dynamic(() => import ('react-draft-wysiwyg').then(
    (module) => module.Editor),
    {
        ssr: false,
    }
);

function TextEditor() {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [session] = useSession();
    const router = useRouter();
    const {id} = router.query;
    const [snapshot] = useDocumentOnce(db.collection('UserDocs').doc(session.user.email).collection('docs').doc(id));

    useEffect(() => {
        if (snapshot?.data()?.editorState) {
            setEditorState(
                EditorState.createWithContent(
                    convertFromRaw(snapshot?.data()?.editorState)
                )
            );
        }
    },[snapshot]);

    const onEditorStateChange  = (editorState) => {
        setEditorState(editorState);

        db.collection('UserDocs').doc(session.user.email).collection('docs').doc(id).set({
            editorState: convertToRaw(editorState.getCurrentContent()),
        }, 
        {
            merge: true,
        });
    };

    return (
        <div className="bg-[#F8F9FA] min-h-screen pb-16">
            <Editor
                editorState={editorState}
                onEditorStateChange={onEditorStateChange} 
                toolbarClassName="flex sticky top-0 z-50 !justify-center mx-auto"
                editorClassName="mt-6 bg-white shadow-lg max-w-4xl mx-auto mb-12 border p-10"
            />
        </div>
    )
}

export default TextEditor
