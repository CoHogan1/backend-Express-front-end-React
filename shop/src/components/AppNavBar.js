import '../App.css'
import React , { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap'

// learn mern stack episode 3 finished this file



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
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href="/">Shopping List</NavbarBrand>
                        <NavbarToggler onClick={this.tog}></NavbarToggler>
                        <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/">Link</NavLink>
                            </NavItem>
                        </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}
