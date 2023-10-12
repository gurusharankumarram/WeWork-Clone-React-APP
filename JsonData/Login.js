import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css';

const Login = () => {
    const [values, setValues] = useState({
        email: "",
        password: "",
      })

    let navigate = useNavigate();

    const handleSubmit = (event)=>{
        event.preventDefault();
        if(values.email==='admin@wework.com'&&values.password==='password'){
            localStorage.setItem('email',values.email)
            navigate('/admin')
        }
        else{
            alert('invalid credentials...')
        }
      }
    
    return (
        <div className='mt-3 login-container'>
            <h2 className='login-header'>Login to continue to wework Admin</h2>
            <form onSubmit={handleSubmit} className='login-form'>
                <div className="mb-3">
                    <label htmlFor="email1" className="form-label login-form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name='email' onChange = {e => setValues({...values, email: e.target.value})}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label login-form-label">Password</label>
                    <input type="password" className="form-control" id="password" name='password' onChange = {e => setValues({...values, password: e.target.value})} />
                </div>
                <button type="submit" className="btn btn-primary login-button">LOGIN</button>
            </form>
        </div>
    );
}

export default Login