// import TextEditor from '../../components/TextEditor';
import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';
import {useRouter} from 'next/dist/client/router';
import {db} from '../../firebase';
import {useDocumentOnce} from 'react-firebase-hooks/firestore';
import {getSession, signOut, useSession} from 'next-auth/client';
import Login from '../../components/Login';

function Doc() {
    const [session] = useSession();
    const router = useRouter();
    const [snapshot, loadingSnapshot] = useDocumentOnce(db.collection('userDocs').doc(session.user.email).collection('docs').doc(id));
    // useDocumentOnce acts as a listener, goes into db pulls user email, and doc id 

    if(!session) return <Login />;
    
    return (
        <div>
            <header className="flex justify-between items-center p-3 pb-1">
                <span onClick={() => router.push('/')} className="cursor-pointer">
                    <Icon name="description" size="5xl" color='blue'/>
                </span>
                <div>
                    <h2></h2>
                </div>
            </header>
        </div>
    );
}

export default Doc;
