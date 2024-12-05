import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
export default function AddForm() {
    const navigate = useNavigate();
    const [recipe, newrecipe]=useState({
        title:"",
        ingredients:"",
        category:""
    })
    const handlechange =(event) =>{
        const name = event.target.name;
        const value = event.target.value;
        newrecipe({
            ...recipe,
            [name]:value
        })
    }
    const addrecipe = async()=>{
  
            const response = await axios.post("http://localhost:4000/recipe",recipe)
            console.log(response)
            navigate("/")
       
    }
    
    
  return (
    <div>
      <form style={{ margin: "10px" }}>
        <div className="form-group">
          <label for="Title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            placeholder="Enter Title"
            onChange={handlechange}
            value={recipe.title}
          />
        </div>
        <div className="form-group">
          <label for="Ingredients">Ingredients</label>
          <input
            type="text"
            className="form-control"
            id="ingredients"
            name="ingredients"
            placeholder="Ingredients"
            onChange={handlechange}
            value={recipe.ingredients}
          />
        </div>
        <div className="form-group">
          <label for="Category">Category</label>
          <input
            type="text"
            className="form-control"
            id="category"
            name="category"
            placeholder="Category"
            onChange={handlechange}
            value={recipe.category}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={addrecipe}>
          Submit
        </button>
      </form>
    </div>
  );
}
