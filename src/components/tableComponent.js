import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/table.css'

const TableComponent = ({ imageURL, name, recepie, onClickAction }) => {
    return (
        <>
            <button >
                <p>Name: {name} </p>
                <p><img src={imageURL} alt={name}></img></p>
                <p>{recepie}</p>
            </button>

        </>
    )


}
export default TableComponent;