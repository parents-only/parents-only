//import logo from './logo.svg';
import './App.css';
import React from 'react';
import { ApolloProvider } from "@apollo/react-hooks";
// import Switch from 'react-ios-switch';
import ApolloClient from "apollo-boost";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import Login from './components/LoginForm';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer/index';
import Profile from './components/Profile'
import Explore from './pages/Explore';
import EditProfile from './components/EditProfile';
import Chat from './pages/Chat';
import NoMatch from './pages/NoMatch';
import { ContextProvider } from '../src/utils/context';
import { StoreProvider } from "./utils/GlobalState";
import MessageList from './components/MessageList';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import lib from 'jwt-decode';

const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  },
  uri: '/graphql'
});

library.add(fab);

function App() {



  return (
    <ApolloProvider client={client}>
      <ContextProvider>
        <StoreProvider>
          <Router>
            <Navbar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path="/chat" component={Chat} />
              <Route exact path="/profile/:username?" component={Profile} />
              {/* <Route exact path='/profile' component={Profile} /> */}
              <Route exact path="/chat" component={Chat} />
              <Route exact path='/explore' component={Explore} />
              <Route exact path='/editprofile' component={EditProfile} />
              <Route exact path="/messages/:username?" component={MessageList} />
              <Route component={NoMatch} />
            </Switch>
            <div className="App">
            <Footer />
            </div>
          </Router>
        </StoreProvider>
      </ContextProvider>
    </ApolloProvider>
  );
}

export default App;

