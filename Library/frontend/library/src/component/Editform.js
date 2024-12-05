import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios'

export default function Editform() {
    const location=useLocation();
    const navigate=useNavigate();
    const [bookdetails,setbookdetails]=useState({
        id:"",
        title:"",
        author:"",
        genre:"",
        status:""
    })

    const handleChange=(event)=>{
        let name = event.target.name;
        let value = event.target.value;
        setbookdetails({...bookdetails,[name]:value})
    }
    const updatebook=async(id)=>{
        const response=await axios.put("http://localhost:4002/books/update/"+id,bookdetails)
        console.log(response)
        navigate('/')
    }
    useEffect(()=>{
        setbookdetails({...location.state.editob})
    },[])
  return (
    <div>
      <div>
      <div>
        <div className='form-group'>
            <label>id</label>
            <input type='number' name='id' id='id' readOnly onChange={handleChange} value={bookdetails.id}></input>
        </div>
        <div className='form-group'>
            <label>title</label>
            <input type='text' name='title' id='title' onChange={handleChange} value={bookdetails.title}></input>
        </div>
        <div className='form-group'>
            <label>author</label>
            <input type='text' name='author' id='author' onChange={handleChange} value={bookdetails.author}></input>
        </div>
        <div className='form-group'>
            <label>genre</label>
            <input type='text' name='genre' id='genre' onChange={handleChange} value={bookdetails.genre}></input>
        </div>
        <div className='form-group'>
            <label>status</label>
            <input type='text' name='status' id='status' onChange={handleChange} value={bookdetails.status}></input>
        </div>
        <button type='button' name='edit' id='edit' className='btn btn-primary' onClick={()=>updatebook(bookdetails.id)}>Edit Book</button>
    </div>
      </div>
    </div>
  )
}
