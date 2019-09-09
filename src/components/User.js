import React , { Component } from 'react';

export default class User extends Component{
    state = { state : true}


    toggle = () => {
        this.setState({
            state: !this.state.state
        })
    }

    render()
    {
        return (
            <div>
                 <p>User : <b> {this.props.name} </b></p>
                 <p>{this.props.name} is <b>{this.state.state ?  'present' : 'not present'}</b></p>
                 <button onClick={this.toggle}> Toggle </button>
            </div>
           
        )
    }
}