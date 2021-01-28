//import logo from './logo.svg';
import './App.css';
import React from 'react';
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/LoginForm';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Profile from './components/Profile'
import Explore from './pages/Explore';
import SeeFriends from './pages/SeeFriends';


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
      <Router>
        <>
          <Navbar />
          <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path="/friends" component={SeeFriends} />
          <Route exact path='/explore' component={Explore} />
          <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
          </Switch>
          <Footer />
        </>
      </Router>
</ApolloProvider>
  );
}

export default App;

