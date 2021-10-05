import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import dynamic from 'next/dynamic';

//Use dynamic import to render editor on the client side not on the node js side, to avoid window is not define error
const Editor = dynamic(() => import ('react-draft-wysiwyg').then(
    (module) => module.Editor),
    {
        ssr: false,
    }
);

function TextEditor() {
    return (
        <div>
            <h1>text edit</h1>
        </div>
    )
}

export default TextEditor
