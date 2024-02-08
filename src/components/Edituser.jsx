import React, { useEffect, useState } from 'react'
import style from './main.module.css'
import { Button, Card, TextField } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const Edituser = () => {
    let userId = useParams()
    let navigate = useNavigate()

    let [name,setName] = useState("")
    let [salary,setSalary] = useState("")
    let [company,setCompany] = useState("")

    useEffect(()=>{
        axios.get(`http://localhost:7000/employee/${userId.id}`)
        .then((response)=>{
            setName(response.data.empName)
            setSalary(response.data.empSalary)
            setCompany(response.data.empCompany)
        })
        .catch(()=>{console.log("error");})
    },[])

    let getName=(e)=>{
        setName(e.target.value)
    }

    let getSalary=(e)=>{
        setSalary(e.target.value)
    }

    let getCompany=(e)=>{
        setCompany(e.target.value)
    }

    let formHandle=()=>{
        let data = {
            empName:name,
            empSalary:salary,
            empCompany:company
        }

        axios.put(`http://localhost:7000/employee/${userId.id}`,data)
        .then(()=>{console.log("Data updated");})
        .catch(()=>{console.log("Error...");})

        navigate("/users")
    }

  return (
    <div>
      <div className={style.container}>
        <Card variant="outlined" className={style.card}>
        <h1>Edit Details</h1>
        <TextField id="outlined-basic" label="Name" variant="outlined" size='small' className={style.input} value={name} onChange={getName}/>
        <TextField id="outlined-basic" label="Salary" variant="outlined" size='small' className={style.input} value={salary} onChange={getSalary}/>
        <TextField id="outlined-basic" label="Comapny" variant="outlined" size='small' className={style.input} value={company} onChange={getCompany}/>
        <Button variant="contained" onClick={formHandle}>UPDATE</Button>
        </Card>
      </div>    
    </div>
  )
}

export default Edituser
