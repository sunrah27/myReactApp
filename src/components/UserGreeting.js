import React, { Component } from "react";

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {

        // approach 4
        // if isLoggedIn is set to 'false' then nothing is rendered
        return this.state.isLoggedIn && <div>Welcome Shanur</div>

        // approach 3 (effectively the same as apprach 2 but using itenary)
        // return (
        //     this.state.isLoggedIn ?
        //     (<div>Welcome Shanur</div>) : 
        //     (<div>Welcome Guest</div>)
        // )

        // approach 2
        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome Shanur</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }

        // return <div>{message}</div>

        // approach 1
        // if (this.state.isLoggedIn) {
        //     return (
        //         <div>Welcome Shanur</div>
        //     )
        // } else {
        //     return (
        //         <div>Welcome Guest</div>
        //     )
        // }
    }
}

export default UserGreeting