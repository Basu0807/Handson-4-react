import React, { useState } from "react";
import { Link } from 'react-router-dom'
import "./style.css"

 function Student(){

    const[Data]=useState([
        {
            Name:"John",
            Age:"22 ",
            Course:"MERN",
            Batch: "October",
            Change: "Edit"
        },
        {
            Name:"Brar",
            Age:"26",
            Course:"MERN",
            Batch: "September",
            Change: "Edit"
        }, 
        {
            Name:"Biden",
            Age:"25",
            Course:"MERN",
            Batch: "September",
            Change: "Edit"
        },
        {
            Name:"Christ",
            Age:"26",
            Course:"MERN",
            Batch: "November",
            Change: "Edit"
        },
        {
            Name:"Peter",
            Age:"22",
            Course:"MERN",
            Batch: "September",
            Change: "Edit"
        },
        {
            Name:"Jhanvi",
            Age:"21",
            Course:"MERN",
            Batch: "December",
            Change: "Edit"
        },{
            Name:"Monika",
            Age:"26",
            Course:"MERN",
            Batch: "October",
            Change: "Edit"
        }
    ])

    return(
        <> 
        <div className="container">
        <h1>Student Details</h1>
        <Link to="/student/AddData" id="StudentDetails">Add New Students</Link>
        </div>
        
        <div >
        <table className="tableContainer">
        <tr>
         <th>Name</th>   
         <th>Age</th>   
         <th>Course</th>   
         <th>Batch</th>   
         <th>Change</th>   
        </tr>
        {
        Data.map((item,index)=>{
            return(
            <tr key={index}>
                <td >{item.Name}</td>
                <td>{item.Age}</td>
                <td>{item.Course}</td>
                <td>{item.Batch}</td>
                <td><Link to="/student/edit">{item.Change}</Link></td>
            </tr>
            )
        })
        }
      </table>
        </div>
      
        </>
    )
 }

 export default Student;