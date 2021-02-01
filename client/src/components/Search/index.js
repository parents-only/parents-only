import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import gql from 'graphql-tag';
import USER_SEARCH_QUERY from '../Search/'
import {Link} from 'react-router-dom'



const UserSearch = () => {
    const [searchFilter, setSearchFilter] = useState('');
    const [executeSearch, { data }] = useLazyQuery(
      USER_SEARCH_QUERY
    );
    return (
      <>
        <div>
          Search For A User
          <input
            type="text"
            onChange={(e) => setSearchFilter(e.target.value)}
          />
          <button
            onClick={() =>
              executeSearch({
                variables: { filter: searchFilter }
              })
            }
          >
            OK
          </button>
        </div>
        {data &&
          data.user.map((user, index) => (
            <button className="btn w-100 display-block mb-2" key={user.id}>  
            <Link key={user.id} user={user} index={index}/> 
            </button>
          ))}
      </>
    );
  };

  export default UserSearch;