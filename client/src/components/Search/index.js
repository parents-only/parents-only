import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import gql from 'graphql-tag';
import {USER_SEARCH_QUERY} from '../../utils/queries'
import {Link} from 'react-router-dom'



/*function App() {
  const [users, setUsers] = useState([]);
 
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);



  useEffect(() => {
    setFilteredUsers(
      users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, users]);


  return (
    <div className="App">
      <h1>Users Lists</h1>
      <input
        type="text"
        placeholder="Search Users"
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredUsers.map((user, idx) => (
        <UserDetail key={idx} {...user} />
      ))}
    </div>
  );
}

const UserDetail = (props) => {
  const { name, flag } = props;

  return (
    <>
      <p>
        <img src={flag} alt={name} style={{ width: "20px", height: "20px" }} />
      </p>
      <p>{name}</p>
    </>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);*/
