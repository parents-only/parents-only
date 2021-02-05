import React from 'react';
import './index.css';
import FriendList from '../FriendList/';
import { useParams, Redirect } from 'react-router-dom';
import { QUERY_USER, QUERY_ME } from "../../utils/queries";
import Auth from "../../utils/auth";
import { useQuery, useMutation } from '@apollo/react-hooks';
import { Button } from 'react-bootstrap';
import { ADD_FRIEND } from '../../utils/mutations';
import MessageForm from '../MessageForm';
import MessageList from '../MessageList';
import loggedIn from '../../utils/auth';




const Profile = () => {
    const { username: userParam } = useParams();
  
    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
        variables: { username: userParam }
    });

    const userData = data?.me || data?.user || {};
    userData.gallery = userData.gallery || []

    const [addFriend] = useMutation(ADD_FRIEND);

   

    // redirect to personal profile page if username is the logged-in user's
    if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
        return <Redirect to='/profile' />;
        // With this, we're checking to see if the user is logged in and if so, if the username stored in the JSON Web Token is the same as the userParam value. If they match, we return the <Redirect> component with the prop to set to the value /profile, which will redirect the user away from this URL and to the /profile route.
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!userData?.username) {
        return (
            <h4>
                You need to be logged in to see this page. Use the navigation links above to sign up or log in!
            </h4>
        );
    }

    const handleClick = async () => {
        try {
            await addFriend({
                variables: { id: userData._id }
            });
        } catch (e) {
            console.error(e);
        }
    };



    return (
        <div>
            <div id="mainProfile">
                <div id="topHalf"> 
                    <img src="http://www.boostnet.in/wp-content/uploads/2016/10/Header-1.png" alt="" />
                </div>
                {userParam && (
                    <div id="bottomHalf">
                        <img src={userData.avatar} alt={userData.username} style={{ height: 150, width: 150 }} />

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

                </div>
                    
                        
                <div class="grid-3">
                    <h4>Friends</h4>
                    {loggedIn && userData ? (
                    <div className="col-12 col-lg-3 mb-3">
                        <FriendList
                        username={userData.username}
                        friendCount={userData.friendCount}
                        friends={userData.friends}
                        />
                    </div>
                    ) : null}
                </div>
                {loggedIn && userData ? (
                <div class="grid-4">
                    <h4>About me</h4>
                    <p>Age: {userData.age}</p>
                    <p>Location: {userData.location}</p>
                    <p>Bio: {userData.bio}</p>
                </div>
                 ) : null}
                <div class="grid-5">
                    <h4>Photos</h4>
                    <div id="gallery">
                        {userData.gallery.map(friend => (
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
                <div class="grid-6"></div>
            </div>




    );
}

export default Profile;



