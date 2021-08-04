import React from 'react';
import Header from '../templates/Header';
import Footer from '../templates/Footer';
import { Link } from 'react-router-dom';

const Home = () => {
            return (
                <div className="home">
                    <Header></Header>
                    <section>
                        <div className="jumbotron jumbotron-fluid py-5">
                            <div className="container text-center py-5">
                                <h1 className="display-4">Welcome to Chatify</h1>
                                <p className="lead">A great place to communicate with your friends</p>
                                <div className="mt-4">
                                    <Link className="btn btn-primary px-5 mr-3" to="/signup">Create New Account</Link>
                                    <Link className="btn px-5" to="/login">Login to Your Account</Link>
                                </div>
                            </div>
                        </div>
                    </section>
                    <Footer></Footer>
                </div>
            )
}

export default Home;
