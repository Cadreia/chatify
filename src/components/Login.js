import React, {useState} from "react";
import { Link } from "react-router-dom";
import {signin, signup} from "../helpers/auth";

const Login = () => {
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
        setError("")
        try {
            await signin(userDetails.email, userDetails.password);
        } catch (error) {
            setError(error.message)
        }
    }

        return (
            <div className="container">
                <form
                    className="mt-5 py-5 px-5"
                    autoComplete="off"
                    onSubmit={handleSubmit}
                >
                    <h1>
                        Login to
                        <Link className="title ml-2" to="/">
                            Chatty
                        </Link>
                    </h1>
                    <p className="lead">
                        Fill in the form below to login to your account.
                    </p>
                    <div className="form-group">
                        <input
                            className="form-control"
                            placeholder="Email"
                            name="email"
                            type="email"
                            onChange={handleChange}
                            value={userDetails.email}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            placeholder="Password"
                            name="password"
                            onChange={handleChange}
                            value={userDetails.password}
                            type="password"
                        />
                    </div>
                    <div className="form-group">
                        {error ? (
                            <p className="text-danger">{error}</p>
                        ) : null}
                        <button className="btn btn-primary px-5" type="submit">Login</button>
                    </div>
                    <hr />
                    <p>
                        Don't have an account? <Link to="/signup">Sign up</Link>
                    </p>
                </form>
            </div>
        );
}

export default Login;
