import axios from 'axios';
import React, { useEffect, useState } from 'react'

    
const GameList = (props) => {
    const [people, setPeople] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/players')
            .then(res=>{
                setPeople(res.data);
            })
            .catch(err => console.error(err));
    },people);

    return (

        <div>
            <h1>Player Status-</h1>
            {people.map( (person, i) =>
                <p key={i}>{person.playerName}, {person.preferredPosition}  </p>
            )}
        </div>
    )
}
    
export default GameList;

