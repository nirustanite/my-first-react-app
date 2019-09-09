import React, { Component } from 'react';
import User from './User';

export default class UserBoard extends Component{
    render(){
       return(
       <div>
            <h3><b>User Board</b></h3>
                    <User name="Niru" />
                    <User name="Partha"/>
        </div> 
       )
    }
}