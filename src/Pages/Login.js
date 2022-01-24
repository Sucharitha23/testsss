import React, {Component} from 'react';
import './login.css';
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
            <div className='div-login'>
                <div>
                    <form onSubmit = {this.handleSubmit}>
                        <input type='email' name='email' placeholder='USER ID' required onChange={this.handleChange}/>
                        <input type='password' name='pwd' placeholder='PASSWORD' required onChange={this.handleChange}/>
                        <button onSubmit={this.handleSubmit}>LOGIN</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;