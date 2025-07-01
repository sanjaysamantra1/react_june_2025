import React, { Component } from 'react'

export default class EventDemo1 extends Component {
    increment() { //  this = EventDemo1
        console.log(this)
        this.setState({ count: this.state.count + 1 });
    }
    constructor(props) {
        super(props)
        this.state = {
            count: 0   // state variable
        }
        // this.increment = this.increment.bind(this);
    }
    render() {
        return <div className='border border-5 rounded-3 p-2 text-center m-2'>
            <h3>Counter Example using state</h3>
            <h4>Count: {this.state.count}</h4>
            <button onClick={this.increment}>Increment</button>
        </div>
    }
}


// 1. use arrow function
// 2. use bind() to explicitly set this=EventDemo1