import React from 'react';
import { useState, useEffect } from "react";

async function CursoUser() {
    /*
  const [cursoUsers,setCursoUser]=useState([]);
    useEffect(()=> {
      fetch("http://localhost:8080/users/1/cursoUser/")
        .then(res => res.json())
        .then(
          (result) => {
            setCursoUser(result);
          }
        );
    });
*/
    //console.log(cursoUsers);
    //console.log(cursoUsers._embedded.cursoUsers[0].nota1);

    
      
      
      let result = await fetch("http://localhost:8080/users/1/cursoUser/");
      const data = await result.json();
      console.log(data._embedded.cursoUsers[0].nota1)
      console.log(data)
      return (
        <div>
          <h2>Detalle de notas por un usuario...</h2>
          <table>
            <thead>
              <tr>
                <th>Nota 1</th>
                <th>Nota 2</th>
                <th>Nota 3</th>
                <th>Promedio</th>
                <th>Curso ID</th>
                <th>USER ID</th>
              </tr>
            </thead>
            <tbody>
            {data.map(d => (
              <tr>
                <td>{data._embedded.cursoUsers[0].nota1}</td>
                <td>{data._embedded.cursoUsers[0].nota2}</td>
              </tr>
            ))}
              
            
            </tbody>
          </table>
        </div>
        );
}
CursoUser()
/*

<tr>
                <td>{data._embedded.cursoUsers[0].nota1}</td>
                <td>{data._embedded.cursoUsers[0].nota2}</td>
                <td>{data._embedded.cursoUsers[0].nota3}</td>
                <td>{data._embedded.cursoUsers[0].promedio}</td>
                <td>{data._embedded.cursoUsers[0].curso_id}</td>
                <td>{data._embedded.cursoUsers[0].user_id}</td>
                </tr>

*/
//<tr key={cursoUser.Id}>
//export default CursoUser