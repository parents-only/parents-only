//import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
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
import SeeFriends from './pages/SeeFriends';
import Chat from './pages/Chat';
import NoMatch from './pages/NoMatch';
import { ContextProvider } from '../src/utils/context';
import { StoreProvider } from "./utils/GlobalState";

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
              <Route exact path="/friends" component={SeeFriends} />
              <Route exact path='/explore' component={Explore} />
              <Route component={NoMatch} />
            </Switch>
            <Footer />
          </Router>
        </StoreProvider>
      </ContextProvider>
    </ApolloProvider>
  );
}

export default App;

