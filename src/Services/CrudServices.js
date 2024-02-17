import React, { Component } from 'react'

import Axios from './AxiosServices.js'
const config = require('../Configuration/Configuration.js' )
const axios=new Axios()
export default class CrudServices {
    createRecord = (data) => {
        console.log(`${data} and ${config.createRecord}`)
        return axios.post(config.createRecord,data,false) 
    }
}
