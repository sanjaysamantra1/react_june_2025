import React, { Component } from 'react'

export default class CounterDemo1 extends Component {
    name = 'Virat Kohli'; // not a state variable
    constructor(props) {
        super(props)
        this.state = {
            count: 0   // state variable
        }
    }
    increment = () => {
        // this.state.count = this.state.count++; // NO
        this.setState({ count: this.state.count + 1 });
    }
    render() {
        // console.log('Render called....')
        return <div className='border border-5 rounded-3 p-2 text-center'>
            <h3>Counter Example using state</h3>
            <h4>Count: {this.state.count}</h4>
            <button onClick={this.increment}>Increment</button>
        </div>
    }
}
