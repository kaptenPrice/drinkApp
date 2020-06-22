import React from 'react';
const EditPage = (props) => { 
    console.log(props)
    return <div>This is my edit Page{props.match.params.id}</div> };
export default EditPage;