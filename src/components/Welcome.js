import React, { Component } from "react";

class Welcome extends Component {
    render() {
        return <h4>Welcome {this.props.name} a.k.a {this.props.heroName}</h4 >
    }
}

export default Welcome