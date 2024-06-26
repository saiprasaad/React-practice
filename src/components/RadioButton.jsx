import { useState } from "react";

export function RadioButton() {
    const options = ["cricket", "football", "hockey"];
    const days = ["weekday", "weekend"];

    const [game, setGame] = useState("");
    const [day, setDay] = useState("");

    function handleInputChange(event) {
        const {name, value} = event.target;
        if(name === "game") {
            setGame(value);
        } else {
            setDay(value);
        }
    }

    return <div className="container">
        <p className="h3">Which game you will play</p> 

        <h1>Game</h1>
        {options.map((option) => {
            return <div className="form-check"> <input className="form-check-input" type = "radio" name = "game" value = {option} onChange={handleInputChange}/> <label className="form-check-label">{option}</label></div>
        })}
        <br />
        {days.map((d) => {
            return  <div className="form-check"> <input type = "radio" name = "day" value = {d} onChange={handleInputChange} className="form-check-input"/><label className="form-check-label">{d}</label></div>
        })}

        <p>You will play: {game} on {day}</p>
    </div>


}