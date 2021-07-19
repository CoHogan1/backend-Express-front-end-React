// learn the mern stack

import './App.css'
import React, { Component } from 'react'
import AppNavBar from './AppNavBar'

export default class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            hello: true,
        }
    }
    // here



    render(){
        return(
            <div className="App">
            <AppNavBar />

            <h1>Shop</h1>


            </div>
        )
    }
}
