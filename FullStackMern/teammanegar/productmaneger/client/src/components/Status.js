import React, { useState,useEffect } from 'react'
import { NavLink, useParams } from "react-router-dom";
import axios from 'axios';

const Status = (props) => {
  const {  changeStatus } = props;
  const { num } = useParams();

  const [players, setPlayers] = useState([]);
  const handelButton = (e, player) => {
    player.status[num - 1] = e.target.value;
    changeStatus(player, num);
  }
  useEffect(() => {
    axios.get('http://localhost:8000/api/players')
        .then(res => {
            setPlayers(res.data);
            console.log(res.data)
            })
        .catch(err => console.log(err));
}, [])

  return (
    <div>
      <h1>Player Status - Game {num}</h1>
      <h3><NavLink style={({ isActive }) => (isActive ? {fontWeight: "bolder", textDecoration:"none"} : {})} to={"/status/game/1"}>Game 1</NavLink> | <NavLink style={({ isActive }) => (isActive ? {fontWeight: "bolder", textDecoration:"none"} : {})} to={"/status/game/2"}>Game 2</NavLink> | <NavLink style={({ isActive }) => (isActive ? {fontWeight: "bolder", textDecoration:"none"} : {})} to={"/status/game/3"}>Game 3</NavLink></h3>
      <table style={{ margin: "0 auto", border: "1px solid black", width: "60%" }}>
        <thead>
          <tr>
          <th style={{ margin: "0 auto", border: "1px solid black" }}>Player Name</th>
          <th style={{ margin: "0 auto", border: "1px solid black" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
        {players.map((player, i) => {
          return <tr key={i}>
            <td style={{ margin: "0 auto", border: "1px solid black" }}>{player.playerName}</td>
            <td style={{ margin: "0 auto", border: "1px solid black", display: "flex", justifyContent: "space-evenly" }}>
              {
                // status [plpaying,undecided,undecided]

                player.status[num - 1] === "Playing" ?
                  <>
                    <input type="submit" value="Playing" style={{ margin: "1%", backgroundColor: "green" }} onClick={(e) => handelButton(e, player)} />
                    <input type="submit" value="Not Playing" style={{ margin: "1%" }} onClick={(e) => handelButton(e, player)} />
                    <input type="submit" value="Undecided" style={{ margin: "1%" }} onClick={(e) => handelButton(e, player)} />
                  </>
                  :
                  <></>
              }
              {
                player.status[num - 1] === "Not Playing" ?
                  <>
                    <input type="submit" value="Playing" style={{ margin: "1%" }} onClick={(e) => handelButton(e, player)} />
                    <input type="submit" value="Not Playing" style={{ margin: "1%" , backgroundColor: "red" }} onClick={(e) => handelButton(e, player)} />
                    <input type="submit" value="Undecided" style={{ margin: "1%"}} onClick={(e) => handelButton(e, player)} />
                  </>
                  :
                  <></>
              }
              {
                player.status[num - 1] === "Undecided" ?
                  <>
                    <input type="submit" value="Playing" style={{ margin: "1%" }} onClick={(e) => handelButton(e, player)} />
                    <input type="submit" value="Not Playing" style={{ margin: "1%" }} onClick={(e) => handelButton(e, player)} />
                    <input type="submit" value="Undecided" style={{ margin: "1%", backgroundColor: "yellow" }} onClick={(e) => handelButton(e, player)} />
                  </>
                  :
                  <></>
              }
            </td>
          </tr>
        })}
        </tbody>
      </table>
    </div>
  )
}

export default Status