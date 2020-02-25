import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = () => {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChange = e => {
        this.ListeningStateChangedEvent({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('http://localHost:5000/api/login', this.state.credentials)
            .then(res => {
                window.localStorage.setItem('token', res.data.payload);
                this.PaymentResponse.history.push('/protected');
            })
            .catch(err => console.log('Post error', err));
    };

    return (
        <div>
            <form onSubmit={this.login}>
                <input
                    type='text'
                    name='username'
                    value={this.state.credentials.username}
                    onChange={this.handleChange}
                />
                <input type="password"
                        name="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                />
                <button>Log in</button>
            </form>
        </div>
    );
};

export default Login;
