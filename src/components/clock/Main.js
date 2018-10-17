import React, {Component} from 'react';
import Config from './Config';
import './Clock.css';
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
                <div className="app_clock_time">{this.state.time.toLocaleTimeString(Config.local)}</div>
                <div className="app_clock_date">{this.state.time.toLocaleDateString(Config.local,Config.format)}</div>
                
            </div>
        )
    }
}
export default Clock;