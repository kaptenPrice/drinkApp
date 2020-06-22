import React, { useState, useEffect } from 'react';
import drinkList from '../data/drinks.json';
import TableComponent from '../components/tableComponent';

const Explore = () => {
    const [searchTerm, setsearchTerm] = useState("");
    const [searchResult, setsearchResult] = useState([]);

    const handleChange = e => {
        setsearchTerm(e.target.value.toLowerCase());
    };
    useEffect(() => {
        const result = drinkList.cocktails.filter(elem =>
            elem.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setsearchResult(result);
    }, [searchTerm]);

    const ShowResult = () => {
        return (
            searchResult.map((elem, index) =>
                <TableComponent
                    recepie={elem.preparation}
                    key={index}
                    name={elem.name}
                    imageURL={elem.image}
                />
            )
        )
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleChange}
            />
            <ul>
                {console.log(searchResult)}
                {searchResult.length > 0 ? <ShowResult /> : "Try with another drink"}
            </ul>






        </div>
    )

}


export default Explore;