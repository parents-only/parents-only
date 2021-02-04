import React from 'react';
import './index.css';
import MessageList from '../MessageList';
import MessageForm from '../MessageForm'
import FriendList from '../FriendList'
//import Status from '../Status'
import { QUERY_USER, QUERY_ME } from "../../utils/queries";
import Auth from "../../utils/auth";
import { Redirect, useParams } from "react-router-dom";
// This component, Redirect, will allow us to redirect the user to another route within the application. Think of it like how we've used location.replace() in the past, but it leverages React Router's ability to not reload the browser!
import { ADD_FRIEND } from '../../utils/mutations';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { Button } from 'react-bootstrap';


const Profile = () => {
    const { username: userParam } = useParams();

    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
        variables: { username: userParam },
        // Now if there's a value in userParam that we got from the URL bar, we'll use that value to run the QUERY_USER query. If there's no value in userParam, like if we simply visit /profile as a logged-in user, we'll execute the QUERY_ME query instead.
    });

    const user = data?.me || data?.user || {};
    user.gallery = user.gallery || []

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

    const handleClick = async () => {
        try {
            await addFriend({
                variables: { id: user._id }
            });
        } catch (e) {
            console.error(e);
        }
    };



    return (
        <div>
            <div id="mainProfile">
                <div id="topHalf">
                    <img src={"http://www.boostnet.in/wp-content/uploads/2016/10/Header-1.png"} alt="" />
                </div>
                {userParam && (
                    <div id="bottomHalf">
                        <img src={user.avatar} alt={user.username} style={{ height: 150, width: 150 }} />

                        <Button variant="success" className="btn ml-auto centered" onClick={handleClick}>
                            Add Friend
                    </Button>

                    </div>
                )}
            </div>
            <div className="wrapper" id="status">
            

                    {!userParam && 
                    <MessageForm />} 

                    {!userParam && 
                    <MessageList />}

                    

                        
                        <div className="grid-3">
                            <h4>Friends</h4>
                                <FriendList
                                    username={user.username}
                                    friendCount={user.friendCount}
                                    friends={user.friends}                        
                                /> 
                        </div>
                        

                        
                        <div className="grid-4">
                            
                            
                            <h4>About me</h4>
                            <p>Age: {user.age}</p>
                            <p>Location: coming soon</p>
                            <p>Bio: {user.bio}</p>         
                        </div>
                        
            
            
                <div className="grid-5">
                    <h4>Photos</h4>
                    <div id="gallery">
                        {user.gallery.map(friend => (
                            <div><img src={friend} alt=""/></div>
                                
                          ))}
                    </div>
                </div>
                {/* <div className="grid-6">
                <MessageList
                messagess={user.messagess}
                title={`${user.username}'s thoughts...`}
                />
                {!userParam && <MessageForm />}
                </div> */}
                <div className="grid-7">
                    
                </div>
            </div>
        </div>



    );
};

export default Profile;



