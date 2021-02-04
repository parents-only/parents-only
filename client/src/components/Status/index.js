import React, { useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { ADD_MESSAGE } from '../../utils/mutations';
import { QUERY_MESSAGES, QUERY_ME, QUERY_USER } from '../../utils/queries';
import Auth from '../../utils/auth';
import { Avatar } from '@material-ui/core';
// This component, Redirect, will allow us to redirect the user to another route within the application. Think of it like how we've used location.replace() in the past, but it leverages React Router's ability to not reload the browser!
import { ADD_FRIEND } from '../../utils/mutations';


const Status = () => {
    const [ input, setInput ] = useState('');
    const { username: userParam } = useParams();

    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
        variables: { username: userParam },
        // Now if there's a value in userParam that we got from the URL bar, we'll use that value to run the QUERY_USER query. If there's no value in userParam, like if we simply visit /profile as a logged-in user, we'll execute the QUERY_ME query instead.
    });

    const user = data?.me || data?.user || {};

    const [addFriend] = useMutation(ADD_FRIEND);

    // redirect to personal profile page if username is the logged-in user's
    if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
        return <Redirect to='/profile' />;
        // With this, we're checking to see if the user is logged in and if so, if the username stored in the JSON Web Token is the same as the userParam value. If they match, we return the <Redirect> component with the prop to set to the value /profile, which will redirect the user away from this URL and to the /profile route.
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user?.username) {
        return (
        <h4>
            You need to be logged in to see this page. Use the navigation links above to sign up or log in!
        </h4>
        );
    }
    

    const handleSubmit = e => {
        e.preventDefault();

        setInput('');

    }

    
        return (

            <div>
                <div className="grid-2">
                    <div className="statusCard">
                        <div className="row px-3"> 
                            <Avatar 
                                src="https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzN8fHBvcnRyYWl0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                            <div className="flex-column">
                                <h3 className="mb-0 font-weight-normal">{user.username}</h3> 
                                <select name="privacy" className="privacy">
                                    <option>Public status</option>
                                    <option>Private status</option>
                                </select>
                            </div>
                        </div>
                        <div className="row px-3 form-group"> 
                            <textarea 
                                className="text-muted bg-light mt-4 mb-3" 
                                placeholder="Hi AJ, what's on your mind today?" 
                                onChange={e => setInput(e.target.value)} 
                                value={input}></textarea> 
                        </div>
                        <div className="row px-3">
                            <p className="fa fa-user options mb-0 mr-4"></p>
                            <p className="fa fa-map-marker options mb-0 mr-4"></p>
                            <p className="fa fa-image options mb-0 mr-4"></p> 
                                <img 
                                    className="options" 
                                    src="https://img.icons8.com/material/24/000000/more--v2.png" 
                                    width="30px" 
                                    height="28px" 
                                />
                            <div className="btn btn-dark ml-auto" id="post" 
                                onClick={handleSubmit}>
                                    Post
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

export default Status;