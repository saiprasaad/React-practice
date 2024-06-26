import { useState } from "react"
import { User } from "../models/User";
import * as yup from "yup";

export function UserForm() {
    const [form, setForm] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState([]);

    const schema = yup.object().shape({
        name: yup.string().required().min(6),
        email: yup.string().email().required().min(12)
    })

    function handleInputChange(event) {
        const {name, value} = event.target;
        setForm(f => ({
            ...f, [name] : value
        }))
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const result = await schema.validate(form);
        } catch(error) {
            setErrors([...errors, error.errors]);
        }
        setIsSubmitted(true);
    }

    return <div className="container">
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input className="form-control" type="text" name = "name" onChange={handleInputChange}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input className="form-control" type="email" name = "email" onChange={handleInputChange} />
            </div>
            <div className="mb-3">
                <button type="submit" className="btn btn-success">Submit</button>
            </div>
        </form>
        {isSubmitted && <div>
            <label>Name: {form['name']}</label>
            <br />
            <label>Email: {form['email']}</label>
            </div>}
            {(isSubmitted && errors.length) > 0 &&
            errors.map((e) => {return <p>{e}</p>})}
    </div>


}