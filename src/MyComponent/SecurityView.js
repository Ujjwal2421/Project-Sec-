import React, { Fragment, useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css'
import { json, useNavigate } from 'react-router-dom';
import jsonData from './Info.json';
import CrudServices from "../Services/CrudServices";
const services=new CrudServices()
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
        console.log("Use Effect Called")
        services.ReadRecord().then((res)=>{
            setHeaders(res);
            console.log(res.data)
        }).catch(err=> console.log(err))
    },[])

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
                      Array.isArray(headers) && headers.length{">"}0?  {
                        headers.map((key) => (
                            <td key={key}>{headers.values}</td>
                ))}:<td>No Data</td>
                    </tr>
                    </tbody>
            </Table>
    );
};

export default SecurityView
