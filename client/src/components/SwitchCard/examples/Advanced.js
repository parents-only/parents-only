import React, { useState, useMemo, useEffect } from 'react'
// import TinderCard from '../react-tinder-card/index'
import TinderCard from 'react-tinder-card';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { QUERY_FRIEND_CARD } from '../../../utils/queries';
import { ADD_FRIEND } from '../../../utils/mutations';


const db = [
    {
        "username": "merayoussef",
        "email": "mera@mera.com",
        "password": "coding",
        "age": "29",
        "distance": "5 miles away" 
    },
    {
        "username": "sydneyporter",
        "email": "sydney@sydney.com",
        "password": "coding",
        "age": "26",
        "distance":"10 miles away "
    }
]

const alreadyRemoved = [];
let charactersState = db // This fixes issues with updating characters state forcing it to use the current state and not the state that was active when the card was created.

function Advanced() {

    const { loading, data } = useQuery(QUERY_FRIEND_CARD);
    const [addFriend] = useMutation(ADD_FRIEND);

    const [lastDirection, setLastDirection] = useState()
    const childRefs = useMemo(() => Array(db.length).fill(0).map(i => React.createRef()), [])
    const [characters, setCharacters] = useState(db)

    console.log(data);

    // useEffect(() => {
    //     setCharacters(data.cards.filter(item => item._id !== data._id) || {} )
    // },[data]) 

    if (loading) {
        return <div>Loading...</div>;
    }

     


    
    async function swiped(direction, nameToDelete) {
        console.log('removing: ' + nameToDelete)
        setLastDirection(direction)
        alreadyRemoved.push(nameToDelete)
        
        console.log (direction)
        if (direction === "right") {
            console.log("Howdy");
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
        setCharacters(charactersState)
    }

    const swipe = (dir) => {
        const cardsLeft = characters.filter(person => !alreadyRemoved.includes(person.name))
        if (cardsLeft.length) {
            const toBeRemoved = cardsLeft[cardsLeft.length - 1].name // Find the card object to be removed
            const index = db.map(person => person.name).indexOf(toBeRemoved) // Find the index of which to make the reference to
            alreadyRemoved.push(toBeRemoved) // Make sure the next card gets removed next time if this card do not have time to exit the screen
            childRefs[index].current.swipe(dir) // Swipe the card!
        }
    }

    return (
        <div>
            <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
            <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />
            <h1>React Tinder Card</h1>
            <div className='cardContainer'>
                {characters.map((character, index) =>
                    <TinderCard ref={childRefs[index]} className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
                        <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
                            <h3>{character.name}</h3>
                        </div>
                    </TinderCard>
                )}
            </div>
            <div className='buttons'>
                <button onClick={() => swipe('left')}>Swipe left!</button>
                <button onClick={() => swipe('right')}>Swipe right!</button>
            </div>
            {lastDirection ? <h2 key={lastDirection} className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText'>Swipe a card or press a button to get started!</h2>}
        </div>
    )
}

export default Advanced;