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
   
    if(!session) return <Login />;
    
    const router = useRouter();
    const { id } = router.query;
    const [snapshot, loadingSnapshot] = useDocumentOnce(
        db.collection('UserDocs').doc(session.user.email).collection
        ('docs').doc(id));

        console.log(snapshot);
    // useDocumentOnce acts as a listener, goes into db pulls user email, and doc id 
    
    //Security measure, if user doesnt have access to file name, assume the user doesnt have access to file
    if(!loadingSnapshot && !snapshot?.data()?.fileName) {
        router.replace('/');
    }
    
    return (
        <div>
            <header className="flex justify-between items-center p-3 pb-1">
                <span onClick={() => router.push('/')} className="cursor-pointer">
                    <Icon name="description" size="5xl" color='blue'/>
                </span>
                <div className="flex-grow px-2">
                    <h2>{snapshot?.data()?.fileName}</h2>
                    <div className='flex items-center text-sm space-x-1 -ml-1 h-8 text-gray-600'>
                        <p>File</p>
                        <p>Edit</p>
                        <p>View</p>
                        <p>Insert</p>
                        <p>Format</p>
                        <p>Tools</p>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Doc;
