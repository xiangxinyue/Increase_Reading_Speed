import React from "react";
import "./test.css";
import $ from "jquery";

let time;

class Test0 extends React.Component {
    constructor(){
        super()
        this.state = {
            sentence: "hello world you are my best friends ever, and Xue Xihong, I will funck you oneday, trust me!",
            sentence1: null,
            length: 0
        }
    }

    componentDidMount = async() => {
        const sentenceArray = await this.state.sentence.split(" ")
        let newArray = [];
        await sentenceArray.map( word => {
            if (word.includes(",") || word.includes("!") || word.includes("?")) {word = word.slice(0, word.length-1)}
            newArray.push(word);
        })
        console.log(newArray)
        await this.setState({sentence1: newArray})
        this.setState({length: this.state.sentence1.length})
    }

    startReading = () => {
        let index = 0;
        time = setInterval( async() => {
            if (index < this.state.length) {
                await $(`.${this.state.sentence1[index]}`).css("color", "white");
                index += 1
            } else {
                clearInterval(time);
            }
        }, 300);
    };

    render(){
        return(
            <div>
                {this.state.sentence1
                ?
                    <div className="row" style={{paddingLeft:30, fontSize: 20}}>
                    {this.state.sentence1.map( word => (
                        <div className={word}>&nbsp;{word}</div>
                    ))}
                    </div>
                    
                :
                    <p>wait for a sec</p>
                }    
                <button onClick={this.startReading}>Start</button>
            </div>
        )
    }
}

export default Test0;