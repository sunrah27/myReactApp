import React from "react";

export default function Columns() {
    const items = [{id: 1, title: 'First'},{id: 2, title: 'Second'}]
    return (
        <>
            {
                items.map( item => (
                    <React.Fragment key={item.id}>
                        <td>
                            <h1>{item.id}</h1>
                            <p>{item.title}</p>
                        </td>
                    </React.Fragment>
                ))
            }
            <td>Name</td>
            <td>Shanur</td>
        </>
    )
}