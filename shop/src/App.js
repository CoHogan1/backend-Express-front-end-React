// learn the mern stack
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import React, { Component } from 'react'
import AppNavBar from './components/AppNavBar'
import Shoppinglist from './components/shoppingList'

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
              <Shoppinglist />
            </div>
        )
    }
}
