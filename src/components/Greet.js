import React from "react";

// function Greet() {
//     return <h1>Hello Shanur</h1>
// }

const Greet = (props) => {
    return (
        <div>
            <h3>Greetings {props.name} a.k.a {props.heroName}</h3>
            {props.children}
        </div>
    )
}

export default Greet