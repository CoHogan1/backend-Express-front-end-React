// learn the mern stack #4
import React, { Component } from 'react'
import { Container, ListGroup, ListGroupItem, Button} from 'reactstrap'
import { CSSTransition, TransitionGroup} from 'react-transition-group'
import { v1 as uuid } from 'uuid' // generates id's
// old import that didnt work.
// import uuid from 'uudi'
// need to specify the version.

export default class ShoppingList extends Component {
    state = {
        items: [
            {id: uuid(), name: 'Eggs'},  //uuid just generates a random id.
            {id: uuid(), name: 'Milk'},
            {id: uuid(), name: 'Steak'},
            {id: uuid(), name: 'Water'},
        ]
    }
    render(){
        const { items } = this.state
        return(
            <Container>
                <Button
                    color='dark'
                    style={{marginBottom: '2rem'}}
                    onClick={()=>{
                        const name = prompt('Enter Item')
                        if(name){
                            this.setState(state =>({
                                items: [...state.items, { id: uuid(), name }]
                            }))
                        }
                    }}
                    >Add Item</Button>

                <ListGroup>

                    <TransitionGroup className="shopping-list">

                        {items.map(({id, name}) => {
                            return (
                                <CSSTransition
                                    key={id} timeout={500} classNames="fade">
                                    <ListGroupItem>
                                        <Button className="remove-btn" color="danger" size="sm"
                                            onClick={()=>{
                                                this.setState(state => ({
                                                    items: state.items.filter(item => item.id !== id)
                                                }))                                                
                                            }}
                                            >&times;</Button>
                                        {name}
                                    </ListGroupItem>
                                </CSSTransition>
                            )
                        })}

                    </TransitionGroup>

                </ListGroup>

            </Container>
        )
    }
}
