import Button from "@material-tailwind/react/Button";
import Icon from '@material-tailwind/react/Icon';
import {useSession} from 'next-auth/client';
import {signOut} from 'next-auth/client';

function Header() {
    const [session] = useSession();

    return (
        <header className="flex items-center sticky top-0 z-50 px-4 py-2 shadow-md bg-white">
            <Button
                color='gray'
                buttonType='outline'
                rounded={true}
                iconOnly={true}
                ripple='dark'
                className='h-20 w-20 border-0'
            >
                <Icon name='menu' size='3xl'/>
            </Button>
            <Icon name='description' size='3xl' color='blue' />
            <h1 className='ml-2 text-gray-700 text-2xl'>Docs</h1>
            <div className='flex flex-grow items-center px-5 py-2 bg-gray-100 text-gray-600 rounded-lg mx-5 md:mx-20 focus-within:text-gray-600 focus-within:shadow-md'>
                <Icon name='search' size='3xl' color='gray' />
                <input type="text" placeholder='Search' className='flex-grow px-5 text-base bg-transparent outline-none'/>
            </div>
            <Button
                color='gray'
                buttonType='outline'
                rounded={true}
                iconOnly={true}
                ripple='dark'
                className='ml-5 md:ml-20 h-20 w-20 border-0'
            >
                <Icon name='apps' size='3xl' color='gray'/>
            </Button>
            <img
                onClick={signOut} 
                loading='lazy'
                className='cursor-pointer h-12 w-12 rounded-full ml-2'
                src={session?.user?.image}
                alt=''
            />
        </header>
    )
}

export default Header


//LIBRARIES
// npm install -E @material-tailwind/react
// npm install firebase@8.7.1
// npm install --save next-auth
// npm install next-auth @next-auth/firebase-adapter
// npm install --save react-firebase-hooks
// npm npm install --save react-draft-wysiwyg draft-js