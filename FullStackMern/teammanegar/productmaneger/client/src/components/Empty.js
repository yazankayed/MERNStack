import React , {useEffect} from 'react'
import { Link } from 'react-router-dom';
import { useNavigate} from "react-router-dom";
const Empty = () => {
    const navigate = useNavigate();
    useEffect(()=>{
        navigate("/players/list");
    },[]);

  return (
    <div>
        <h1>Nothing here.</h1>
        <Link to={"/"}>Home</Link>
    </div>
  )
}

export default Empty