import React from "react";

const Hello = () => {
    return (
        <div id="hello" className="classHello">
            <h1>Hello World</h1>
        </div>
    )
    // return React.createElement('div', {id: 'hello', className: 'classHello'}, React.createElement('h1', null, 'Hello World'));
}

export default Hello