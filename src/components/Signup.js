import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { signup } from "../helpers/auth";

const SignUp = () => {

    const [error, setError] = useState(null)
    const [userDetails, setUserDetails] = useState({
        email: "",
        password: ""
    })

    const handleChange = (event) => {
        const { name, value } = event.target;

        setUserDetails(prevDetails => {
            return {
                ...prevDetails,
                [name]: value
            };
        });
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        setUserDetails({
            email: "",
            password: ""
        })
        try {
            await signup(userDetails.email, userDetails.password);
        } catch (error) {
            setError(error.message)
        }
    }

        return (
            <div className="container">
                <form className="mt-5 py-5 px-5" onSubmit={handleSubmit}>
                    <h1>
                        Sign Up to
                        <Link className="title ml-2" to="/">Chatty</Link>
                    </h1>
                    <p className="lead">Fill in the form below to create an account.</p>
                    <div className="form-group">
                        <input className="form-control" placeholder="Email" name="email" type="email" onChange={handleChange} value={userDetails.email}></input>
                    </div>
                    <div className="form-group">
                        <input className="form-control" placeholder="Password" name="password" onChange={handleChange} value={userDetails.password} type="password"></input>
                    </div>
                    <div className="form-group">
                        {error ? <p className="text-danger">{error}</p> : null}
                        <button className="btn btn-primary px-5" type="submit">Sign up</button>
                    </div>
                    <hr></hr>
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                </form>
            </div>
        )
    }

export default SignUp;
