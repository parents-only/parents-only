import React from 'react'
// import TinderCard from '../react-tinder-card/index'
import TinderCard from 'react-tinder-card'
import { useMutation, useQuery } from "@apollo/react-hooks";
import { QUERY_FRIEND_CARD } from "../../../utils/queries";
import { ADD_FRIEND } from "../../../utils/mutations";

function Simple() {
    
    const { loading, data } = useQuery(QUERY_FRIEND_CARD);
    const [addFriend] = useMutation(ADD_FRIEND);
    
    if (loading) {
        return <div>Loading...</div>;
    }
    let clippedList = data.cards.filter(item => item._id !== data.me._id)
    clippedList.forEach(element => {
        let id = element._id
        data.me.friends.forEach(friendElement => {
            if (id === friendElement._id) {
                clippedList = clippedList.filter( item => item._id !== friendElement._id)
            }
        });
    });
    let characters = clippedList;
    console.log(characters);
    async function swiped(direction, nameToDelete) {
        if (direction === "right" || direction === "up") {
            try {
                await addFriend({
                    variables: { id: nameToDelete }
                });
            } catch (e) {
                console.error(e);
            }
        }
    }

    const outOfFrame = (name) => {
        //console.log(name + ' left the screen!')
    }

    return (
        <div style={{marginBottom: "80%"}}>
            <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
            <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />
            {/* <h1>{character.name}</h1> */}
            <div className='cardContainer'>
                {characters.map((character) =>
                    <TinderCard className='swipe' key={character._id} onSwipe={(dir) => swiped(dir, character._id)} onCardLeftScreen={() => outOfFrame(character._id)}>
                        <div style={{ backgroundImage: 'url(' + character.avatar + ')' }} className='card'>
                            <h3 style={{color: 'black'}}>{character.username}</h3>
                        </div>
                    </TinderCard>
                
                
                )}
            </div>
        </div>
    )
}

export default Simple;

