import React, { Component } from "react";
import TrainingPart from "../../components/trainingpart/trainingpart";
class Train extends Component {
    
    constructor(){
        super();
        this.state = {
            startTrain: false,
            quesNum: 1,
        };
        
    };
    
    startTrain = () => {
        this.setState({ startTrain: true });
    }


    render(){
        return(
            <div className="container">
                <div className="jumbotron">
                    <h1>Welcome to the training page</h1>
                    {
                        this.state.startTrain 
                        ?
                        <TrainingPart />
                        :
                        <button onClick={this.startTrain} >Start Train!</button>
                    }
                </div>
            </div>
        )
    }
}

export default Train;