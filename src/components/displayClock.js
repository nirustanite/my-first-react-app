import React, { Component } from 'react';

export default class displayCLock extends Component{ 
   
    state = {
        hour: 0,
        minute: 0,
        seconds: 0
    }

    checkTime = (value) => {
        if( value < 10)
        {
            value = "0" + value;
        }
        return value;
    }
    
    startTime = () => {
        let today = new Date();
        let hour = today.getHours();
        let minute = today.getMinutes();
        let seconds = today.getSeconds();
        hour = this.checkTime(hour);
        minute = this.checkTime(minute);
        seconds = this.checkTime(seconds);
        this.setState({
            hour,
            minute,
            seconds
        })
    }

     componentDidMount() {
        this.interval = setInterval(() => this.startTime(), 1000);
      }
      componentWillUnmount() {
        clearInterval(this.interval);
      }
  
    render(){
        return(
            <div>
                 <h3> Display Clock </h3>
                 <p>
                    {this.state.hour} : {this.state.minute} : {this.state.seconds} 
                 </p>
                </div>
        );
    }
}