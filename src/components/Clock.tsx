import React, {Component} from 'react';

type ClockState = { //created a new type that houses a single property of "time" w/ an assigned data type of "Date"
    time: Date
}
                                //the carrots are where we pass in props followed by state (always this order)
class Clock extends Component <{}, ClockState> {
    constructor(props) {
        super(props)
        this.state = {time: new Date()}
    }

    tick() {
        this.setState({
            time: new Date()
        })
    };

    /* componentWillMount() {  //initializing a state in the constructor method (line 10) prevents you from having to 
        this.tick()             //initialize it in a lifecycle method as we do in these commented out lines
    }; */

    componentDidMount() {
        setInterval(() => this.tick(), 1000)
    }

    render() {
        return(
            <div>
                <h2>{this.state.time.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

export default Clock;