import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

export default function EditForm() {
    const location=useLocation();
    const navigate=useNavigate();

    const[taskdetails,settaskdetails]=useState({});
  
    useEffect(()=>{
        settaskdetails(location?.state?.editob);
        console.log("Edit"+location?.state?.editob)
    },[])

    const handlechange=(event)=>{
        let name=event.target.name
        let value=event.target.value
        settaskdetails({
          ...taskdetails,[name]:value
        })
    }

    const updatetask=async()=>{
        const response = await axios.put("http://localhost:4002/todos/"+taskdetails.id,taskdetails);
        console.log(response)
        navigate("/");
    }


  return (
    <div>
      <table>
        <tr>
          <td>
            ID: <input type="text" name="id" id="id" onChange={handlechange} value={taskdetails.id} readOnly></input>&nbsp;&nbsp;&nbsp;&nbsp;
            Title: <input type="text" name="title" id="title" onChange={handlechange} value={taskdetails.title}></input>&nbsp;&nbsp;&nbsp;&nbsp;
            Description: <input type="text" name="description" id="description" onChange={handlechange} value={taskdetails.description}></input>&nbsp;&nbsp;&nbsp;&nbsp;
            Status: <input type="text" name="status" id="status" onChange={handlechange} value={taskdetails.status}></input>&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" name="btn" className='btn btn-success' onClick={updatetask}>Submit</button>
          </td>
        </tr>
      </table>
    </div>
  )
}
