import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
    
const Detail = (props) => {
    const [player, setPlayer] = useState({})
    const { id } = useParams();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/people/' +id)
            .then(res => setPlayer(res.data))
            .catch(err => console.error(err));
    }, []);
    
    return (
        <div>
            <p>Player Name: {player.playerName}</p>
            <p>Preferred Position: {player.preferredPosition}</p>
        </div>
    )
}
    
export default Detail;

