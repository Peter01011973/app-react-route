import React from 'react';
import { useAuthConext } from '../../auth-context/auth-context';

const Auth = () => {
   const {auth, setAuth} = useAuthConext();
   const handleSetAuth = () => {setAuth(true)}
   return (
      <>
         <button onClick={handleSetAuth}>Press to sign in</button>
         {auth && <p>Yes</p>}
      </>
   )
}

export default Auth;