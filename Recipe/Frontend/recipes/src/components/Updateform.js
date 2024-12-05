import React, { useState , useEffect} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function Updateform() {
    const navigate = useNavigate();
    const location = useLocation(); 
    const [recipe, setrecipes]=useState({
        ID:'',
        Title:"",
        Ingredients:"",
        Category:""
    })

    const handlechange =(event)=>{
        let name=event.target.name;
        let value=event.target.value;
        setrecipes({
            ...recipe,[name]:value
        })
    }

    const updatetask=async()=>{
        const response = await axios.put("http://localhost:4000/recipe/"+recipe.ID,recipe);
        console.log(response)
        navigate("/");
    }
    useEffect(()=>{
        // setrecipes(location?.state?.updateob);
        setrecipes({...location.state.updateob})
        // console.log(location?.state?.updateob)
    },[])
  return (
    <div>
      <table>
        <tr>
          <td>
            id: <input type="text" name="id" id="id" onChange={handlechange} value={recipe.ID} readOnly></input>&nbsp;&nbsp;&nbsp;&nbsp;
            title: <input type="text" name="Title" id="title" onChange={handlechange} value={recipe.Title}></input>&nbsp;&nbsp;&nbsp;&nbsp;
            ingredients: <input type="text" name="Ingredients" id="ingredients" onChange={handlechange} value={recipe.Ingredients}></input>&nbsp;&nbsp;&nbsp;&nbsp;
            category: <input type="text" name="Category" id="category" onChange={handlechange} value={recipe.Category}></input>&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" name="btn" className='btn btn-success' onClick={updatetask}>Submit</button>
          </td>
        </tr>
      </table>
   
    </div>
  )
}
