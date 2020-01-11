import React, { Component } from "react";
import { Link } from "react-router-dom";

class Main extends Component {
    
    constructor(){
        super();
        this.state = {

        };
        
    };

    render(){
        return(
            <div className="container">
                <div className="jumbotron">
                    <h2>Welcome to Reading Training</h2>
                    <h4>(Note: this page is for introduction of the reading training application!)</h4>
                    <Link to="user">My Information</Link>
                </div>
            </div>
        )
    }
}

export default Main;