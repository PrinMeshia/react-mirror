import React, {Component} from 'react';
import Config from './Config';
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
                <div>{this.state.time.toLocaleDateString(Config.local,Config.format)}</div>
                <div>{this.state.time.toLocaleTimeString(Config.local)}</div>
            </div>
        )
    }
}
export default Clock;