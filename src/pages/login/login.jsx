import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import './login.css';

function Login({ setLoggedUser }) {
    const [emaillog, setEmaillog] = useState('');
    const [passwordlog, setPasswordlog] = useState('');
    const [flag, setFlag] = useState(false);
    const [home, setHome] = useState(true);

    const loggedInUserIndex = localStorage.getItem("loggedInUserIndex");
    if (loggedInUserIndex) {
        return <Navigate to="/HomePage" />;
    }

    const handleLogin = (e) => {
        e.preventDefault();

        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

        if (existingUsers.length === 0) {
            setFlag(true);
            alert('No user data found. Please sign up.');
            return;
        }

        const user = existingUsers.find((user) => user.email === emaillog);

        if (!emaillog || !passwordlog || !user || user.password !== passwordlog) {
            setFlag(true);
            alert('No user data found.');
        } else {
            localStorage.setItem('loggedInUserIndex', existingUsers.indexOf(user));
            setHome(!home);
            window.location.reload();
            setFlag(false);
        }
    }

    return (
        <section className="login">
            {home ? (
                <form onSubmit={handleLogin}>
                    <h3 className='login__title'>Log in</h3>
                    <div className="login__form">
                        <label>Email</label>
                        <input
                            type="email"
                            className="login__form"
                            placeholder="Email"
                            onChange={(event) => setEmaillog(event.target.value)}
                            required
                        />
                    </div>
                    <div className="login__form2">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            onChange={(event) => setPasswordlog(event.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="login__button">
                        Log in
                    </button>
                    <p>
                        You are not a member? <a href={'/'} className='signup2__button'>Sign up</a>
                    </p>
                </form>
            ) : (
                <Navigate to="/HomePage " />
            )}
        </section>
    );
}

export default Login;