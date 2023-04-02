import hacker from "../img/hacker.png";

function Header () {
    return (
        <header>
            <div className="App-header">
                <h1>My Chat App</h1>
                <span className="avatar">               
                    <img src={hacker} alt="icon avatar"></img>                                      
                </span>
            </div>
            
        </header>
    )
}

export default Header;