import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuthConext } from '../../auth-context/auth-context';

interface Props {
   children: React.ReactNode,
   path: string
}

const ProtectedRoute = ({children, path}: Props) => {
   const {auth} = useAuthConext()
   return (
      <Route
         path = {path}
         render = {()=>(
            auth ? (children) : (<Redirect to="/signin"/>)
         )}
      />
   )
}

export default ProtectedRoute