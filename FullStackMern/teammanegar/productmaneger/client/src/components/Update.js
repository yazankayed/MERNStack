import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useNavigate} from "react-router-dom";
import {
    Routes,
    Route,
    Link 
  } from "react-router-dom";
    
const Update = (props) => {
    const { id } = useParams();
    const [playerName, setPlayerName] = useState('');
    const [preferredPosition, setPreferredPosition] = useState('');
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);

    
    useEffect(() => {
        axios.get('http://localhost:8000/api/players/' + id)
            .then(res => {
                setPlayerName(res.data.playerName);
                setPreferredPosition(res.data.preferredPosition);
            })
    }, []);
    
    const updatePlayer = e => {
        e.preventDefault();
        axios.patch('http://localhost:8000/api/players/' + id, {
            playerName,
            preferredPosition
        })
            .then(res => navigate("/players/list"))
            .catch(err => {
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            });
    }
    
    return (
        <div>
            <h1><Link to={"/players/list"}>List </Link> ||<Link to={"/players/addplayer"}>Add Player </Link>  </h1>
            <h1>Update a Player</h1>
            {errors.map((err, index) => <p style={{ color: "red" }} key={index}>{err}</p>)}
            <form onSubmit={updatePlayer}>
                <p>
                    <label>Player Name</label><br />
                    <input type="text" 
                    name="playerName" 
                    value={playerName} 
                    onChange={(e) => { setPlayerName(e.target.value) }} />
                </p>
                <p>
                    <label>Preferred Position</label><br />
                    <input type="text" 
                    name="preferredPosition"
                    value={preferredPosition} 
                    onChange={(e) => { setPreferredPosition(e.target.value) }} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}
    
export default Update;

