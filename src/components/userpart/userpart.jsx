import React, { Component } from "react";
import { Link } from "react-router-dom";

class UserPart extends Component {
    constructor(){
        super();
        this.state = {
            username: "User 1", // need to extract from database
            level: 1,           // need to extract from database
        };
    };

    componentDidMount = () => {
        // TODO : query the username and level from the databse 
    }

    render(){
        return(
            <div className="container">
                <div className="jumbotron">
                    <h2>Welcome back: {this.state.username}</h2>
                    {this.state.level === 0
                    ?
                    <Link to="/test">First Time? Test My Level</Link>
                    :
                    <div>
                        <h3>Your level now is: {this.state.level}</h3>
                        <Link to="/train">Start Training</Link>
                    </div>
                    }
                </div>
            </div>
        )
    }
}

export default UserPart;