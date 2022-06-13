import React from 'react';
import { useState, useEffect } from "react";
import axios from 'axios';

function CursoUser() {
    
  const [cursoUser,setCursoUser]=useState([]);
    useEffect(()=> {
      //axios.get("http://localhost:8080/users/1/cursoUser/")
      fetch("http://localhost:8080/users/1/cursoUser/")
        .then(res => 
          //res.data._embedded.cursoUsers
          //console.log(res.data._embedded.cursoUsers)
          res.json()
        )
        .then(
          (result) => {
            console.log(result)
            var array = Object.entries(result);
            setCursoUser(array);
          }
        );
    });
  
      return (
        <div>
          <h2>Employees Data...</h2>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Location</th>
                <th>Salary</th>
              </tr>
            </thead>
            <tbody>
            {cursoUser.map(curso=> (
              <tr>
                <td>{curso._embedded}</td>
                
                </tr>
            ))}
            </tbody>
          </table>
        </div>
        );
}

export default CursoUser
/*

res.data._embedded.cursoUsers

*/