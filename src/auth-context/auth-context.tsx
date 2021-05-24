import React, { createContext } from 'react';

interface AuthContextType {
   auth: boolean,
   setAuth: any
}


interface Props {
  children: React.ReactNode
}

const initAuthContext: AuthContextType = {auth: false, setAuth: ()=>{}};

const AuthContext = createContext<AuthContextType>(initAuthContext);

const useAuthConext = () => {
   const context = React.useContext(AuthContext);
   if (!context) {
      throw new Error('Impossable to create authContext!')
   }
   return context
}

function AuthContextProvider(props: Props) {
   const [auth, setAuth] = React.useState(false);
   return (
      <AuthContext.Provider value={{auth, setAuth}}>
         {props.children}
      </AuthContext.Provider>
   )
}

export {useAuthConext, AuthContextProvider}