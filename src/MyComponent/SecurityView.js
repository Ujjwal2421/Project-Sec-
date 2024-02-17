import React, { Fragment, useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css'
import { json, useNavigate } from 'react-router-dom';
import jsonData from './Info.json';

const SecurityView = () => {
    // const navigate = useNavigate();
    const [headers, setHeaders] = useState([]);
    const keys = Object.keys(jsonData);
    // const handleEdit =(id)=>{
    //     navigate('/edite',{state:{info:id}});
    //     console.log(id)
    // }

    // const handleDelete =(id)=>{
    //     if(window.confirm(`are you sure to delete ${id}`) == true){
    //         alert(id);
    //     }
    // }

    console.log(keys)
    useEffect(() => {
        setHeaders(keys);
        // setInfo(data);
    }, [])

return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                    {keys.map((key) => (
                        <th key={key}>{key}</th>
            ))}
                    </tr>
                </thead>
                    <tbody>
                        <tr>
                        {
                        keys.map((key) => (
                            <td key={key}>{jsonData[key]}</td>
                ))}
                    </tr>
                    </tbody>
            </Table>
    );
};

export default SecurityView
