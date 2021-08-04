import React, {useState} from "react";
import { Link } from "react-router-dom";
import {signin, signInWithGitHub, signInWithGoogle} from "../helpers/auth";

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

    const googleSignIn = async() => {
        try {
            await signInWithGoogle();
        } catch (error) {
            setError(error.message)
        }
    }

    const githubSignIn = async() => {
        try {
            await signInWithGitHub();
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
                    <p>You can also log in with any of these services</p>
                    <button className="btn btn-danger mr-2" type="button" onClick={googleSignIn}>
                        Sign in with Google
                    </button>
                    <button className="btn btn-secondary" type="button" onClick={githubSignIn}>
                        Sign in with GitHub
                    </button>
                    <hr />
                    <p>
                        Don't have an account? <Link to="/signup">Sign up</Link>
                    </p>
                </form>
            </div>
        );
}

export default Login;
