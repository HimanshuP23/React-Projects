import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function AddForm() {
    const location = useLocation();
    const navigate = useNavigate();
    const [taskdetails, settaskdetails] = useState({
        id: '',
        title: '',
        description: '',
        status: ''
    });

    useEffect(() => {
        if (location?.state?.addob) {
            settaskdetails(location.state.addob);
            console.log("Add", location.state.addob);
        }
    }, [location]);

    const handlechange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        settaskdetails({
            ...taskdetails,
            [name]: value
        });
    };

    const addtask = async () => {
        try {
            const response = await axios.post("http://localhost:4002/todos", taskdetails);
            console.log(response);
            navigate("/"); 
        } catch (error) {
            console.error("Error adding task", error);
        }
    };

    return (
        <div>
            <table>
                <tr>
                    <td>
                        ID: <input
                            type="text"
                            name="id"
                            id="id"
                            onChange={handlechange}
                            value={taskdetails.id || ''}
                        />
                        Title: <input
                            type="text"
                            name="title"
                            id="title"
                            onChange={handlechange}
                            value={taskdetails.title || ''}
                        />
                        Description: <input
                            type="text"
                            name="description"
                            id="description"
                            onChange={handlechange}
                            value={taskdetails.description || ''}
                        />
                        Status: <input
                            type="text"
                            name="status"
                            id="status"
                            onChange={handlechange}
                            value={taskdetails.status || ''}
                        />
                        <button
                            type="button"
                            name="btn"
                            className="btn btn-success"
                            onClick={addtask}
                        >
                            ADD
                        </button>
                    </td>
                </tr>
            </table>
        </div>
    );
}
//get the data 
