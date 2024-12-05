import React, { useEffect, useState } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
export default function Home() {

    const [books, setbooks]=useState([]);

    const fetchbooks=async()=>{
    const response = await axios.get("http://localhost:4002/books/view")
    setbooks(response.data);
    }

    const deletebook=async(id)=>{
        const response=await axios.delete(`http://localhost:4002/books/delete/${id}`)
        console.log(response);
        fetchbooks();
    }

    const updatestatus=async(id,status)=>{
        if(status==="Available"){
            const response=await axios.patch(`http://localhost:4002/books/${id}`)
            console.log(response)
            fetchbooks();
        }
        else{
            const response=await axios.patch(`http://localhost:4002/books/avail/${id}`)
            console.log(response)
            fetchbooks();
        }
    }

    useEffect(()=>{
        fetchbooks();
    },[])

  return (
    <div>
      <table border={2}>
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Title</th>
                <th scope="col">Author</th>
                <th scope="col">Genre</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            {books.map((book)=>(
                <tr key={book.id}>
                    <td>{book.id}</td>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.genre}</td>
                    <td>{book.status}</td>
                    <td>
                        <Link to={`/Editform/${book.id}`} state={{editob:book}}>
                            <button type='button' name='edit' id='edit' className='btn btn-success'>Edit</button>
                        </Link>

                        <button type='button' name='delete' id='delete' className='btn btn-danger' onClick={()=>{deletebook(book.id)}}>Delete</button>
                        <button type='button' name='changestatus' id='changestatus' className='btn btn-primary'onClick={()=>{updatestatus(book.id,book.status)}} >Change Status</button>
                    </td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}
