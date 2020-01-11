import React, { Component } from "react";
import { TestingPart } from "../../components/testingpart/testingpart";
import { Link } from "react-router-dom";

let time;
class Test extends Component {
    constructor(){
        super();
        this.state = {
            testingState: null,
            time: null
        };
    };
    
    startTest = () => {
        this.setState({testingState: "start"})
        time = setInterval(() => {
            this.setState({
                time: Math.round((this.state.time + 0.01) * 100) / 100 
            });
        }, 10);
    };

    finishTest = () => {
        this.setState({testingState: "finish"})
        clearInterval(time);
    };
    
    componentDidUpdate = () => {
        if (this.state.testingState === "finish") console.log(this.state)
        // TODO : analysis the time and update it to the database.
    }

    render(){
        return(
            <div className="container">
                <div className="jumbotron">
                    <h1>Welcome to the Testing page</h1>
                    <p>Instruction: click the start button,
                        time will count, when you finish reading the paragraph,
                        click the finish button, the time will stop.
                    </p>
                    {!this.state.testingState
                    ? 
                    <button onClick={this.startTest}>Start To Test</button>
                    :
                    <TestingPart finish={this.finishTest}/>
                    }
                    <Link to="/user">Go Back Home</Link>
                
                </div>
            </div>
           
        )
    }
}

export default Test;