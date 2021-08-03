// learn the mern stack
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import React, { Component } from 'react'
import AppNavBar from './components/AppNavBar'
import Shoppinglist from './components/shoppingList'

import { Provider } from 'react-redux'
import store from './store'

export default class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            hello: true,
        }
    }
    // left off at video 5 --3:02
    // npm i redux react-redux redux-thunk
    // 

    render(){
        return(
            <Provider store={store}>
                <div className="App">
                  <AppNavBar />
                  <Shoppinglist />
                </div>
            </Provider>
        )
    }
}
