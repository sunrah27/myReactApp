import React from "react";

export default function Person({person}) {
    return (
        <h2> My name is {person.name}. I am {person.age} years old. I am skilled at {person.skill}.</h2>
    )
}