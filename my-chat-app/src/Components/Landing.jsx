import { Link } from "react-router-dom";
import avatarImg from "../img/avatar.png";
import hacker from "../img/hacker.png";
import ninja from "../img/ninja.png";

const Landing = ({member, avatar, currentAvatar}) => {
      return (
        <>             
            <div class="landing-choose-avatar">
                <button  id="ninja" onClick={avatar} 
                    style={{backgroundColor: currentAvatar === "ninja" ? "rgb(97, 195, 97)" : "",}}>
                        <img id="ninja" src={ninja} alt="ninja"></img>
                </button>
                <button  onClick={avatar} 
                    style={{backgroundColor: currentAvatar === "avatarImg" ? "rgb(97, 195, 97)" : "", }}>
                        <img id="avatarImg" src={avatarImg} alt="avatarImg"></img>
                </button>
                <button  onClick={avatar} style={{backgroundColor: currentAvatar === "hacker" ? "rgb(97, 195, 97)" : "", }}>
                    <img id="hacker" src={hacker} alt="hacker"></img>
                </button>
            </div>
            <div class="landing-name">
                <input class="input-landing" type="text" placeholder="Enter your name..." onChange={member}></input>            
                <Link to="/ChatRoom"><button>Enter the room</button></Link>
            </div>
        </>
    )
}

export default Landing;