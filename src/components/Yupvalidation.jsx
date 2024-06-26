import { useState } from "react"
import * as yup from "yup"

export function Yupvalidation() {
    const [formData, setFormData] = useState({});
    const schema = yup.object().shape({
        name: yup.string().required(),
        email: yup.string().email().required(),
        password: yup.string().required().min(6)
    })

    function handleInputChange(event) {
        const {name, value} = event.target;
        setFormData(f => ({...f, [name]: value}));
    }

    async function handleSubmit(event) {
        event.preventDefault();
        try {
        const response = await schema.validate(formData);
        console.log("Success");
        } catch (error) {
            console.log(error);
        }
    }

    return <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name = "name" onChange={handleInputChange} />
            <input type="text" name = "email" onChange={handleInputChange} />
            <input type="text" name = "password" onChange={handleInputChange} />
            <button type="submit">Submit</button>
        </form>
    </div>
}