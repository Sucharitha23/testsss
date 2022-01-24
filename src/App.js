import React from 'react'
import {Switch,Route, Routes} from 'react-router-dom'
import { Component } from 'react'
import Login from './Pages/Login'

class App extends Component{
  render(){
  return(
    <div>
      <Routes>
        <Route exact path='/' element={<Login/>} ></Route>
      </Routes>
    </div>
  )
}}

export default App;
