import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/table.css'

const TableComponent = ({ imageURL, name, recepie, onClickAction }) => {
    return (
        <>
            <div className="Result" >
                <p>Name: {name} </p>
                <p><img src={imageURL} alt={name}></img></p>
                <p>Recepie: {recepie}</p>
            </div >

        </>
    )


}
export default TableComponent;