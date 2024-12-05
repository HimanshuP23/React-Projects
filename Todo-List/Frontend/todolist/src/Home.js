import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
export default function Home() {
  const [todos, settodos] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const response = await axios.get("http://localhost:4002/todos");
    settodos(response.data);
  };

  const deleteTodo = async (id) => {
    const response = await axios.delete(`http://localhost:4002/todos/${id}`);
    if (response.status === 200) {
      settodos(todos.filter((todo) => todo.id !== id));
    }
  };
  return (
    <div>
      <Link to={"/add"}>
      <button type="button" name="btn" id="addbtn">
        Add New Task
      </button>
      </Link>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">title</th>
            <th scope="col">description</th>
            <th scope="col">status</th>
            <th scope="col">actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.title}</td>
              <td>{todo.description}</td>
              <td>{todo.status}</td>
              <td>
                <Link to={"/edit"} state={{ editob: todo }}>
                  <button
                    type="button"
                    name="edit"
                    id="update"
                    className="btn btn-primary"
                  >
                    Edit
                  </button>
                </Link>
                &nbsp;&nbsp;
                <button
                  type="button"
                  name="delete"
                  id="remove"
                  className="btn btn-danger"
                  onClick={() => deleteTodo(todo.id)}
                >
                  Delete
                </button>
                &nbsp;&nbsp;
                <button
                  type="button"
                  name="mark as complete"
                  id="Marker"
                  className="btn btn-success"
                  //   onClick={statuschange}
                >
                  Complete
                </button>
                &nbsp;&nbsp;
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
