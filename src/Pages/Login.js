import React, {Component} from 'react';
import './login.css';
import {Link} from 'react-router-dom'
import {logo as ReactComponent}from '../Images/logo.png'

class Login extends Component{
    state={
        email:'',
        pwd:''
    }

    handleChange = (e) =>{
        const {name,value} = e.target
        this.setState({[name]:value})
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.isLogin(true)
    }
    render(){
        return(
            <div className='page'>
            <h1> Meet Assist</h1>
            <div className="main">
                      <h2>LOGIN</h2>
                      <form onSubmit={this.handleSubmit}>
                    <input type="email" placeholder="USER ID" name="email" required={this.handleChange}/>
                    <input type="password" placeholder="PASSWORD" name="pwd" required={this.handleChange}/>
                    <button onSubmit={this.handleSubmit}>SIGN IN</button>
                    </form>
            </div> 
            </div>      
        )
    }
}

export default Login;