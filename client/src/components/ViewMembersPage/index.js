import React, { useState } from 'react';
import ProfileCard from '../ProfileCard/index';
const Users = [];
for (let i = 0; i < 25; i++) {
    Users.push({
        Age: i,
        Location: i,
        Bio: i
    });
}

const ViewMembersPage = () => {
    const [currentUser, setCurrentUser] = useState(0);

    const match = () => {
        // matched with the user, add to matched
        if (currentUser < 24) {
            setCurrentUser(currentUser + 1);
        } else {
            setCurrentUser(0);
        }
    };

    const nomatch = () => {
        // remove 
        if (currentUser < 24) {
            setCurrentUser(currentUser + 1);
        } else {
            setCurrentUser(0);
            // repopulate
        }

    };

    return (
        <ProfileCard match={match} nomatch={nomatch} age={Users[currentUser].Age} location={Users[currentUser].Location} bio={Users[currentUser].Bio}/>
    );
};

export default ViewMembersPage;