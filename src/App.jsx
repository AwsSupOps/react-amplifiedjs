import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

import { Amplify } from 'aws-amplify';

//import { withAuthenticator } from '@aws-amplify/ui-react';
import { useAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);


function App(){
   const { user, signOut } = useAuthenticator((context) => [context.user]);
   
  return (
    <>
      <h2>Hello {user.username}</h2>
      console.log(" username"+ user)
      <button onClick={signOut}>Sign out</button>
    </>
  );
}

export default (App);

//export default App

