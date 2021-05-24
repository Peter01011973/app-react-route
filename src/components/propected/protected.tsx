import React from 'react';
import { useAuthConext } from '../../auth-context/auth-context';

const Protected = () => {
   const {auth} = useAuthConext();
   return (
      <>
         <p>{auth?'Authenticated':'Closed!'}</p>
      </>
   )
}

export default Protected;