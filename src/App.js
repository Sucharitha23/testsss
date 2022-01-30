import React from 'react'
import {Route, Routes} from 'react-router-dom'
import { Component } from 'react'
import Login from './Pages/Login'
import Home from './Pages/Home'
import Booking from './Pages/Booking'

class App extends Component{
  state={
    isLog:false
  }
  handleLogin=(isLog)=> this.setState({isLog})
  render(){
    const {isLog}=this.state;
  return(
    <div>
      <Routes>
        <Route exact path='/' element = {!isLog?<Login isLogin={this.handleLogin}/>:<Home/>}/>
        <Route exact path='/Home' element={<Home/>}></Route>
        <Route exact path='/Booking' element={<Booking/>}></Route>
  </Routes>

    </div>
  )
}}

export default App;
