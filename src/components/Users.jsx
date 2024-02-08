import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import style from "./main.module.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Users = () => {
  let [content, setContent] = useState([]);
  let [reload,setReload] = useState(false)

  useEffect(() => {
    axios
      .get("http://localhost:7000/employee")
      .then((response) => {
        setContent(response.data);
      })
      .catch(() => {
        console.log("error");
      });
      setReload(false)
  }, [reload]);

  let deleteUser=(id)=>{
    axios.delete(`http://localhost:7000/employee/${id}`)
    setReload(true)
  }

  return (
    <div>
    <div className={style.boxes}>
      {content.map((user) => {
        return (
          <div>
              <Card variant="outlined" className={style.box}>
                
                  <h1>Details</h1>
                  <h2>Name: {user.empName}</h2>
                  <h2>Salary: {user.empSalary}</h2>
                  <h2>Company: {user.empCompany}</h2>
                  <div className={style.buttons}>
                  <Link to={`/edituser/${user.id}`}><Button variant="contained" className={style.button}>UPDATE</Button></Link>
                  <Button variant="contained" className={style.button} onClick={()=>{deleteUser(user.id)}}>DELETE</Button>
                  </div>
                
              </Card>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default Users;
