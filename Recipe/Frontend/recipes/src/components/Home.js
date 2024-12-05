import React, { useEffect, useState } from "react";
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from "react-router-dom";
export default function Home() {
  const [recipes, setrecipes] = useState([]);

  const fetchrecipes = async () => {
    const response = await axios.get("http://localhost:4000/recipe")
    console.log(response.data)
    setrecipes(response.data)
  }
  
  const deleterecipe = async (id) =>{
    const response = await axios.delete(`http://localhost:4000/recipe/${id}`)
    console.log(response)
    fetchrecipes();
  }
  useEffect(()=>{
    fetchrecipes();
  },[])

  return(
    <div>
      <table border={2} className="table table-striped">
        <thead style={{"backgroundColor":"#A5D8FF"}}>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Ingredients</th>
            <th scope="col">Category</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          
          {recipes.map((recipe)=>
          <tr key={recipe.ID}>
            {/* <td>{recipe.ID}</td> */}
            <td>{recipe.Title}</td>
            <td>{recipe.Ingredients}</td>
            <td>{recipe.Category}</td>
            <td>
              <Link to="/Updateform" state={{updateob:recipe}}>
              <button type='button' name="edit" id="edit" className="btn btn-success">EDIT</button>&nbsp;&nbsp;&nbsp;
              </Link>
              <button type='button' name="delte" id="delete" className="btn btn-danger" onClick={() => deleterecipe(recipe.ID)}>DELETE</button>&nbsp;&nbsp;&nbsp;
            </td>
          </tr>
          )}
        </tbody>
      </table>
      <Link to="/AddForm">
      <button type="button" name="add" id="add" className="btn btn-success" style={{"marginLeft":"0.5rem"}}>ADD</button>
      </Link>
    </div>

  ) 
}
