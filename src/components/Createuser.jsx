import React, { useState } from 'react'
import style from './main.module.css'
import { Button, Card, TextField } from '@mui/material'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Createuser = () => {
    let [name,setName] = useState("")
    let [salary,setSalary] = useState("")
    let [company,setCompany] = useState("")
    let navigate = useNavigate()

    let getName=(e)=>{
        setName(e.target.value)
    }

    let getSalary=(e)=>{
        setSalary(e.target.value)
    }

    let getCompany=(e)=>{
        setCompany(e.target.value)
    }

    let formHandle=(e)=>{

        let data={
            empName:name,
            empSalary:salary,
            empCompany:company
        }
        
        axios.post("http://localhost:7000/employee",data)
        .then((response)=>{console.log("Data Stored");})
        .catch(()=>{console.log("error");})

        navigate("/users")
    }

  return (
    <div>
      <div className={style.container}>
        <Card variant="outlined" className={style.card}>
        <h1>Enter Details</h1>
        <TextField id="outlined-basic" label="Name" variant="outlined" size='small' className={style.input} value={name} onChange={getName}/>
        <TextField id="outlined-basic" label="Salary" variant="outlined" size='small' className={style.input} value={salary} onChange={getSalary}/>
        <TextField id="outlined-basic" label="Comapny" variant="outlined" size='small' className={style.input} value={company} onChange={getCompany}/>
        <Button variant="contained" onClick={formHandle}>Submit</Button>
        </Card>
      </div>
    </div>
  )
}

export default Createuser
