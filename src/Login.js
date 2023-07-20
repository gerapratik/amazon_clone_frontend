import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';
 import {auth} from './firebase';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPAssword] = useState('');

    const signIn=e=>{
        e.preventDefault();
        //some fancy firebase login
    }
    const register = e=>{
        e.preventDefault();
        auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            console.log("Successfully created new user")
        }) 
        .catch(error=>alert('error message'))
        //some fance firebase register
    }





    return (
        <div className="login">
            <Link to='./'>
                <img
                    className='login__logo'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt="" />
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>

                <form>
                    <h5>Email</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPAssword(e.target.value)} />
                    <button onClick={signIn}
                    type='submit'
                    className="login__signInButton">Sign In
                    </button>

                </form>
                <p>
                    <h1>MADE BY PRATIK 🥵🥵</h1>
                </p>

                <button onclick={register}
                className='login__registerButton'>Create your Amazon Account</button>
            </div>



        </div>

    )
}

export default Login
