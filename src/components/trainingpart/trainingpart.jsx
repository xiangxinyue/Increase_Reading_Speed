import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
let time;

class TrainingPart extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            level: 1,
            score: 0,
            currentParaNum: 0,
            maxNumOfQues: 4,
            currPara: "Once, a man and his son were going to the market with their donkey.",
            currParaArray: [],
            length: 0,
            readDone: false,
            answerred: false,
            paragraphs: [
                "The man put the boy on the donkey.",
                "An Eagle swooped down upon a Serpent and seized it in his talons with the intention of carrying it and devouring it.",
                "A countryman, who was a witness of the encounter, came to the assistance of the eagle, and succeeded in freeing him from the Serpent and enabling him to escape.",
                "Jim and Jeny went to the orchard to pick apples.",
            ],
            questions: ["Where were the man and the boy traveling?"],
            choices: [["School", "Market", "Hospital", "Park"]],
            answers: ["School"],
            youtAnswer: null
        };
        
    };

    componentDidMount = async() => {
        // TODO : query paragraphs and question based on the user level
        // using MongoDB findAll().toArray() method
        // this.disappearHelper(0)
        const sentenceArray = await this.state.currPara.split(" ")
        let newArray = [];
        await sentenceArray.map( word => {
            if (word.includes(",") || word.includes("!") || word.includes("?") || word.includes(".")) {word = word.slice(0, word.length-1)}
            newArray.push(word);
        })
        console.log(newArray)
        await this.setState({currParaArray: newArray})
        await this.setState({length: this.state.currParaArray.length})
        this.startReading()
    }

    componentDidUpdate = () => {
        // TODO : when all training done, update the newest level based on the score
    }

    startReading = async() => {
        let index = 0;
        await setTimeout(() => {
            time = setInterval( async() => {
                if (index < this.state.length) {
                    await $(`.${this.state.currParaArray[index]}`).css("color", "#e9ecef");
                    index += 1
                } else {
                    await this.setState({ readDone: true})
                    clearInterval(time);
                }
            }, 300);
        }, 1000)
    };

    checkAnswer = async(e) => {
        await this.setState({ youtAnswer: e.target.value})
        if (this.state.youtAnswer === this.state.answers[0]) {
            this.setState({ 
                answerred: true,
                score: this.state.score + 1
            })
        } else {
            this.setState({ answerred: true})
        }
    }

    changeQuestion = async () => {
        await this.setState({ 
            currentParaNum: this.state.currentParaNum + 1,
            currPara: this.state.paragraphs[this.state.currentParaNum],
            readDone: false,
            answerred: false
        });
        this.startReading();
    }

    render(){
        return(
            <div>

                {this.state.readDone
                ?
                    this.state.answerred
                    ?
                        this.state.currentParaNum < this.state.maxNumOfQues
                        ?
                        <button onClick={this.changeQuestion}>Next Question </button>
                        :
                        <div>
                            <h2>You have finish all the training questions!</h2>
                            <Link to="/user">Go Back Home</Link>
                        </div>
                    :
                    <div>
                        {/* TODO : update the database and use <h3>{this.state.questions[this.state.currentParaNum]}</h3> */}
                        <h3>{this.state.questions[0]}</h3>
                        {/* TODO : update the database and use this.state.choices[this.state.currentParaNum].map(choice => ( */}
                        {this.state.choices[0].map(choice => (
                            <div>
                                <input type="radio" value={choice} defaultChecked={false} onClick={this.checkAnswer} />
                                {choice}
                            </div>
                            
                        ))}
                    </div>
                :
                <div>
                    {this.state.currParaArray
                    ?
                        <div className="row" style={{paddingLeft:30, fontSize: 20}}>
                        {this.state.currParaArray.map( word => (
                            <div className={word}>&nbsp;{word}</div>
                        ))}
                        </div>
                    :
                        <p>wait for a sec ...</p>
                    }
                </div>
                }

                <br/>Your score is: {this.state.score}
                <br/>The process: {this.state.currentParaNum + 1} / {this.state.maxNumOfQues + 1}
            </div>
        )
    }
}

export default TrainingPart;