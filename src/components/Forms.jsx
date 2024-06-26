import { useState } from "react"

export function Forms() {

    const [formsData, setFormsData] = useState({
        name: "", email: ""
    }); 

    function handleInputChange(event) {
        const {name, value} = event.target;
        setFormsData(f => (
            {...f, [name]: value}
        ))
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(formsData);
    }

    return <div>
        <form onSubmit ={handleSubmit}>
        <input type="text" name = "name" onChange={handleInputChange} required/>
        <input type="text" name = "email" onChange={handleInputChange} required/>
        <button type="submit">Submit</button>
        </form>
    </div>
}