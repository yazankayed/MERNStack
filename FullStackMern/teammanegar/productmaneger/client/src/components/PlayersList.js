import axios from 'axios';
import Popup from 'reactjs-popup';
import React, { useEffect, useState } from 'react'
import {
    Routes,
    Route,
    Link
} from "react-router-dom";

const PlayersList = (props) => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/players')
            .then(res => {
                setPeople(res.data);
            })
            .catch(err => console.error(err));
    }, [people]);


    const deletePlayerConfirm = (person) => {
        const confirm = window.confirm(`Are you sure you want to delete  ${person.playerName}?`);
        if (confirm) {
            axios.delete('http://localhost:8000/api/players/' + person._id)
            .then(res => {
                console.log("Deleted succefully")
            })
            .catch(err => console.error(err));
        }
    }

    const deletePlayer = (personId) => {

        axios.delete('http://localhost:8000/api/players/' + personId)
            .then(res => {
                console.log("Deleted succefully")
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <h1><Link to={"/players/list"}>List </Link> ||<Link to={"/players/addplayer"}>Add Player </Link>  </h1>
            <table>
                <tbody>
                    <tr>
                        <th>Player Name</th>
                        <th>Preferred Position</th>
                        <th>Actions Available</th>
                    </tr>
                    {people.map((person, i) =>
                        <tr key={i}>
                            <td ><Link to={"/players/edit/" + person._id}>{person.playerName}</Link> </td>
                            <td > {person.preferredPosition} </td>
                            <td ><button onClick={(e) => { deletePlayerConfirm(person) }}>Delete</button> </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default PlayersList;