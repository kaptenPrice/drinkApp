import React from 'react';
import { Link } from 'react-router-dom';
const TableComponent = ({ imageURL, name, recepie }) => {
    return (
        <>
            <button onClick={recepie}>
                <p>Name: {name} </p>
                <p><img src={imageURL} alt={name}></img></p>
            </button>

        </>
    )


}
export default TableComponent;