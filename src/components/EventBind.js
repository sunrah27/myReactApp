import React, { Component } from "react";

class EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: 'Hello'
        }

        // aoorach number 3
        // this.clickHandler = this.clickHandler.bind(this)
    }

    //approach number 1 and 2
    // clickHandler() {
    //     this.setState({
    //         message: 'Goodbye'
    //     })
    //     console.log(this)
    // }

    // apprach number 4 (experimental)
    clickHandler = () => {
        this.setState({
            message: 'Goodbye'
        })
        console.log(this)
    }

    render() {  
        return (
            <div>
                <div>{this.state.message}</div>
                {/* Binds 'this' by creating a new function every time */}
                <button onClick={this.clickHandler.bind(this)}>Click 1</button>
                {/* Inherits 'this' from the component but also creates a new function every time */}
                <button onClick={() => this.clickHandler()}>Click 2</button>
                {/* Recommended method used with approach number 3 by React.js */}
                <button onClick={this.clickHandler}>Click 3</button>
            </div>
        )
    }
}

export default EventBind