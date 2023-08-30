import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate} from "react-router-dom";

import {
  Routes,
  Route,
  Link 
} from "react-router-dom";
export default () => {
    //keep track of what is being typed via useState hook
    
    const [playerName, setPlayerName] = useState(""); 
    const [preferredPosition, setPreferredPosition] = useState("");
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);
    const [nameError, setNameError] = useState("");
    const [status] = useState(["Undecided", "Undecided", "Undecided"]);
    const handelName = (e) => {
        setPlayerName(e.target.value);
        if (e.target.value.length < 1){
            setNameError("Name is required");
        } else if (e.target.value.length < 2) {
            setNameError("At least two characters!")
        } else {
            setNameError("");
        }
        }
    
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/players', {
            playerName,
        preferredPosition,
        status
        })
            .then(res=>navigate("/players/list"))
            .catch(err=>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
    }
    //onChange to update firstName and lastName
    return (
        <div>
            <h1><Link to={"/players/list"}>List </Link> ||<Link to={"/players/addplayer"}>Add Player </Link>  </h1>

        <form onSubmit={onSubmitHandler}>
            {errors.map((err, index) => <p key={index} style={{ color: "red" }}>{err}</p>)}
            <p style={{ color: "red" }}>{nameError}</p>
            <p>
                <label>Player Name</label><br/>
                <input type="text" onChange={handelName} value={playerName}/>
            </p>
            <p>
                <label>Preferred Position</label><br/>
                <input type="text" onChange={(e)=>setPreferredPosition(e.target.value)} value={preferredPosition}/>
            </p>
            { nameError.length ==0 ?
            <input style={{ width: '100px', margin: '1%' }} type="submit" value="Submit" />:
            <input style={{ width: '100px', margin: '1%' }} type="submit" value="Submit" disabled/>}
            {/* <input type="submit"/> */}
        </form>
        </div>
    )
}

