import React, {  useState,useEffect } from 'react'
import axios from 'axios';
import { useNavigate} from "react-router-dom";
import PlayersList from './components/PlayersList';
import PlayerForm from './components/PlayerForm';
import Detail from './components/Detail'
import Update from './components/Update'
import GameList from './components/GameList';
import Status from './components/Status';
import {
  Routes,
  Route,
  Link 
} from "react-router-dom";
import Empty from './components/Empty';

function App() {
  const [ message, setMessage ] = useState("Loading...")
  useEffect(()=>{
      axios.get("http://localhost:8000/api")
          .then(res=>setMessage(res.data.message))       
  }, []);
  const navigate = useNavigate();

  const editStatus = (player,num) => {
    axios.put('http://localhost:8000/api/players/'+player._id, player)
    .then(res => navigate("/status/game/"+num))
    .catch(err=>{
        const errorResponse = err.response.data.errors;
        const errorArr = [];
        for (const key of Object.keys(errorResponse)) {
            errorArr.push(errorResponse[key].message)
        }
        
    });
  }
  
  return (
        <div>
            {/* <h2>Message from the backend: {message}</h2> */}
            <h1><Link to={"/players/list"}>Manage Players </Link> ||<Link to={"/status/game/1"}>Manage Player Status </Link>  </h1>
            <Routes>
            <Route path="/" element={<Empty />} />
            <Route path="/players/list" element={<PlayersList />} />
            <Route path="/players/addplayer" element={<PlayerForm />} />
            <Route element={<Status  changeStatus = { editStatus }/>} path="/status/game/:num"/>
            <Route path="/status/game/:id" element={<Status />} />
            <Route path="/players/edit/:id" element={<Update />} />
            </Routes>

        </div>
  );
}

export default App;
