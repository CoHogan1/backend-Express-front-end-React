import './App.css'
import React , { Component } from 'react'

// learn mern stack episode 3



export default class AppNavBar extends Component {
    constructor(props){
        super(props)
        this.state = {
            isOpen: false,
        }
        this.toggle.bind(this)
    }

    toggle(){
        // this one doesnt work properly. lol
        console.log("Not using an arrow funciton for practice.")
        console.log(this.state.isOpen)
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    tog = () => {
        console.log("Not using an arrow funciton for practice.")
        console.log(this.state.isOpen)
        this.setState({
            isOpen: !this.state.isOpen
        })
    }



    render(){
        return(
            <div className="Nav">
                <h1>Nav bar</h1>
                <button className="button" onClick={this.tog}>|||</button>

            </div>
        )
    }
}
