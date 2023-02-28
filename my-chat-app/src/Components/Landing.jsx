import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Landing = () => {
    const [name, setName] = useState();
    

    return (
        <div>
            <input type="text" placeholder="Enter your name..." onChange={(e) => setName(e.target.value.toLocaleLowerCase())}></input>
            <Link to="/ChatRoom"><button>Enter the room</button></Link>
        </div>
    )

}

export default Landing;