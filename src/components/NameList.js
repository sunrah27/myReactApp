import React from "react";
import Person from "./Person";

function NameList() {
    const names = ['Bruse', 'Clark', 'Diana']
    const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
    const persons = [
        { id: 1, name: 'Bruce', age: 30, skill: 'React' },
        { id: 2, name: 'Clark', age: 25, skill: 'Angular' },
        { id: 3, name: 'Dianna', age: 28, skill: 'Vue' }
    ]

    const personsList = persons.map(person => <Person key={person.id} person={person} />)

    return (
        <div>
            <div>{nameList}</div>
            <div>{personsList}</div>
        </div>
    )
}

export default NameList