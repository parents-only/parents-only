import React, { useState } from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { ApolloProvider } from '@apollo/react-hooks';
// import ApolloClient from 'apollo-boost';
// import { StoreProvider } from './utils/GlobalState';

// import Header from './components/Header';
// import BookList from './pages/BookList';
// import Detail from './pages/Detail';

// const client = new ApolloClient({
//   uri: '/graphql'
// });

// Remove all traces of prop drilling
function App() {
  const [currentBook, setCurrentBook] = useState('');

  return (
    <h1>HELLO, Parents Only</h1>
  );
}

export default App;
