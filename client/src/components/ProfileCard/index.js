import React, { useState } from 'react';
// import { Form, Button, Alert } from 'react-bootstrap';
// import { useMutation } from '@apollo/react-hooks';
// import { ADD_USER } from '../utils/mutations';
// import Auth from '../utils/auth';
import './style.css';
import babyAJ from '../ProfileCard/BabyAJ.JPG';

const ProfileCard = ({img, name, age, location, bio, match, nomatch}) => {

    var styleMatch = {
        backgroundColor: 'skyblue'
    }

    var styleNext = {
        backgroundColor: 'gray'
    }



    return (
        <div className="card">
            <div className="img-container">
                <img src={babyAJ} alt={name} style={{width: "100%", borderRadius: ".5rem"}}></img>
            </div>
            <div className="content">
                <h1 className="userName">{name}</h1>
                <p>Age : {age}</p>
                <p>Location : {location}</p>
                <p>Bio : {bio}</p>
                <p><button style={styleMatch} onClick={match}>Match</button></p>
                <p><button style={styleNext} onClick={nomatch}>Next</button></p>
            </div>
        </div>
    )
}

export default ProfileCard;