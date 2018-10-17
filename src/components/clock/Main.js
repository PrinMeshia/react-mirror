import React, {Component} from 'react';
import Config from './Config';
<<<<<<< HEAD
import './Clock.css';
=======
>>>>>>> b682124d1f2437bc2837856cb1bf357d3a3c287f
class Clock extends Component{
    constructor(){
        super()
        this.state = {time: new Date()}
    }
    setCurrentTime(){
        this.setState({
            time: new Date()
        })
    }
    componentDidMount(){
        setInterval(()=>this.setCurrentTime(),1000)
    }
    render(){
        return (
            <div className="app_clock">
<<<<<<< HEAD
                <div className="app_clock_time">{this.state.time.toLocaleTimeString(Config.local)}</div>
                <div className="app_clock_date">{this.state.time.toLocaleDateString(Config.local,Config.format)}</div>
                
=======
                <div>{this.state.time.toLocaleDateString(Config.local,Config.format)}</div>
                <div>{this.state.time.toLocaleTimeString(Config.local)}</div>
>>>>>>> b682124d1f2437bc2837856cb1bf357d3a3c287f
            </div>
        )
    }
}
export default Clock;