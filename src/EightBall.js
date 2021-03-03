import React, {useState} from "react";
import "./EightBall.css";


function chooseIdx(arr) {
    const randIdx = Math.floor(Math.random() * arr.length);
    return arr[randIdx];
}



const EightBall = (props) => {
    const [msg, setMsg] = useState("What is your question?");
    const [color, setColor] = useState("black");
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [goldenrod, setGoldenrod] = useState(0);
    

    function changeValues(){
        let { msg, color} = chooseIdx(props.answers);
        
      
  

        setMsg(msg);
        setColor(color);
        if(color === "red") {setRed(red + 1)}
        if (color === "green") {setGreen(green + 1)}
        if (color === "goldenrod") {setGoldenrod(goldenrod + 1)}
        
    }

    function resetValues() {
        setMsg("What is your question?");
        setColor("black");
        setRed(0)
        setGreen(0);
        setGoldenrod(0)
    }


   
    
    return(
        <div>
        <div
        className="EightBall"
        onClick={changeValues}
        style={{backgroundColor: color}}>
            <b>{msg}</b>
          
        </div>

        <div>
            <button onClick={resetValues}>Reset</button>
            </div>
        <div>Red: {red}</div>
        <div>Green: {green}</div>
        <div>Goldenrod: {goldenrod}</div>
        </div>
    )
}






EightBall.defaultProps = {
    answers: [
      { msg: "It is certain.", color: "green" },
      { msg: "It is decidedly so.", color: "green" },
      { msg: "Without a doubt.", color: "green" },
      { msg: "Yes - definitely.", color: "green" },
      { msg: "You may rely on it.", color: "green" },
      { msg: "As I see it, yes.", color: "green" },
      { msg: "Most likely.", color: "green" },
      { msg: "Outlook good.", color: "green" },
      { msg: "Yes.", color: "green" },
      { msg: "Signs point to yes.", color: "goldenrod" },
      { msg: "Reply hazy, try again.", color: "goldenrod" },
      { msg: "Ask again later.", color: "goldenrod" },
      { msg: "Better not tell you now.", color: "goldenrod" },
      { msg: "Cannot predict now.", color: "goldenrod" },
      { msg: "Concentrate and ask again.", color: "goldenrod" },
      { msg: "Don't count on it.", color: "red" },
      { msg: "My reply is no.", color: "red" },
      { msg: "My sources say no.", color: "red" },
      { msg: "Outlook not so good.", color: "red" },
      { msg: "Very doubtful.", color: "red" }
    ]
  };

  export default EightBall;