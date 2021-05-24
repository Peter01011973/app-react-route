import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import { AuthContextProvider } from './auth-context/auth-context';
import Auth from './components/auth/auth';
import Fertilizers from './components/fertilizers/fertilizers';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Home from './components/home/home';
import Protected from './components/propected/protected';
import ProtectedRoute from './components/protected-route/protected-route';


function App() {
  return (
    <div className="container">
      <AuthContextProvider>
        <Header />
        <div className="body">
          <Switch>
              <Route path="/" exact component={Home}/> 
              <Route path="/contacts" render={(props) => (<pre>Contacts {JSON.stringify(props.location, null, 2)}</pre>)}/>
              <Route path="/data" children={({match}) => (<pre>Data {JSON.stringify(match, null, 2)}</pre>)}/>
              <Route path="/fertilizers/:types" component={Fertilizers}/>
              <ProtectedRoute path='/protected'><Protected/></ProtectedRoute>
              <Route path="/signin" component={Auth}/>
          </Switch>
        </div>
        <Footer />
      </AuthContextProvider>
    </div>
  );
}

export default App;
