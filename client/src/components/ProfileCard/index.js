import React from "react";
import { QUERY_USERS, QUERY_ME } from "../../utils/queries";
//import Auth from "../utils/auth";
import { Redirect, useParams } from "react-router-dom";
// This component, Redirect, will allow us to redirect the user to another route within the application. Think of it like how we've used location.replace() in the past, but it leverages React Router's ability to not reload the browser!
import { ADD_FRIEND } from '../../utils/mutations';
import { useQuery, useMutation } from '@apollo/react-hooks';
import MessageForm from '../MessageForm';


const ProfileCard = () => {
    
    const user = useQuery(QUERY_USERS)

    const [addFriend] = useMutation(ADD_FRIEND);


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
            Viewing {user.username}'s profile.
            </h2>

            <div className="img-container">
                <img src={user.avatar} alt={user.username} style={{width: "100%", borderRadius: ".5rem"}}></img>
            </div>
            <div className="content">
                <h1 className="userName">{user.username}</h1>
                <p>Age : {user.age}</p>
                <p>Location : {user.location}</p>
                <p>Bio : {user.bio}</p>
               
                <button className="btn ml-auto" onClick={handleClick}>
                    Add Friend
                </button>
                
            </div>
        </div>
    )
}

export default ProfileCard;