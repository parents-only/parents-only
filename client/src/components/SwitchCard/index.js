import React, {useEffect } from 'react';
import TinderCard from "react-tinder-card";
import { useQuery } from '@apollo/react-hooks';
import { QUERY_USERS } from '../../utils/queries';
import './SwitchCard.css';


function SwitchCard() {
  const { loading, data } = useQuery(QUERY_USERS);
  const users = data?.users || [];
  console.log(users);




  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    
  };

  const outOfFrame = (username) => {
    console.log(username + " left the screen!");
  };


  return (
    <div className="tinderCards">
      <div className="tinderCards_cardContainer">
        {users.map((people) => (
          <TinderCard
            className="swipe"
            key={people._id}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, users.username)}
            onCardLeftScreen={() => outOfFrame(users.username)}
          >
            <div 
              style={{ backgroundImage: `url(https://loremflickr.com/300/400/dog)` }}
              className="card"
            >
              <h3>{users.username}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
      
    </div>
  )
}

export default SwitchCard;
