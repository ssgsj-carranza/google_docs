import 'tailwindcss/tailwind.css'
import '@material-tailwind/react/tailwind.css';
import Head from 'next/head';
import {Provider} from 'next-auth/client';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head>
      {/* //EVERY COMPONENT THAT GETS RENDERED FOR THE APP WILL HAVE ACCESS TO THE SESSION THROUGHT THE PROVIDER */}
      <Provider session={pageProps.session}> 
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp

//TECH STACK
//react
//next.js
//tailwind
//material ui
//firebase firestore
//nextauth
//draft.js
//server side rendering
