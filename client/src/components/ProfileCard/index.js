import React from "react";
import { QUERY_USER, QUERY_ME } from "../utils/queries";
import Auth from "../utils/auth";
import { Redirect, useParams } from "react-router-dom";
// This component, Redirect, will allow us to redirect the user to another route within the application. Think of it like how we've used location.replace() in the past, but it leverages React Router's ability to not reload the browser!
import { ADD_FRIEND } from '../utils/mutations';
import { useQuery, useMutation } from '@apollo/react-hooks';
import MessageForm from '../MessageForm';


const ProfileCard = ({ username, age }) => {
    
    const { username: userParam } = useParams();

    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
        variables: { username: userParam },
        // Now if there's a value in userParam that we got from the URL bar, we'll use that value to run the QUERY_USER query. If there's no value in userParam, like if we simply visit /profile as a logged-in user, we'll execute the QUERY_ME query instead.
    });

    const user = data?.me || data?.user || {};

    const [addFriend] = useMutation(ADD_FRIEND);

    // redirect to personal profile page if username is the logged-in user's
    if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
        return <Redirect to={`/profile/${user.username}`} />;
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
    
        var styleMatch = {
            backgroundColor: 'skyblue'
        }

        var styleNext = {
            backgroundColor: 'gray'
        }



    return (
    

        <div className="card">
            <h2 className="bg-dark text-secondary p-3 display-inline-block">
            Viewing {userParam ? `${username}'s` : 'your'} profile.
            </h2>

            <div className="img-container">
                <img src={user.avatar} alt={user.username} style={{width: "100%", borderRadius: ".5rem"}}></img>
            </div>
            <div className="content">
                <h1 className="userName">{username}</h1>
                <p>Age : {age}</p>
                <p>Location : {user.location}</p>
                <p>Bio : {user.bio}</p>
                {userParam && (
                <button className="btn ml-auto" onClick={handleClick}>
                    Add Friend
                </button>
                )}
            </div>
        </div>
    )
}

export default ProfileCard;