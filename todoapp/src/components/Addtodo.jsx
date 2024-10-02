import React, { useState } from "react";
import axios from "axios";

const Addtodo = ({data2}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  let token = JSON.parse(localStorage.getItem("token"));

  const addNewTassk = () => {
    const headers = {
      Authorization: token,
      "Content-Type": "application/json",
    };
    const task = { title, description };

    axios
      .post(`https://todo-app-full-stack-f52j.onrender.com/post/todo`, task, {
        headers,
      })
      .then((response) => {
        console.log("Task added:", response.data);
        setDescription("");
        setTitle("");
        data2();
      })
      .catch((err) => {
        console.log("Error adding task:", err);
      });
  };



  return (
    <div className="pb-2">
      <div className="card">
        <div className="card-body">
          <div className="d-flex flex-row align-items-center">
            <input
              type="text"
              className="form-control form-control-lg"
              id="exampleFormControlInput1"
              placeholder="Add Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <a href="#!" data-mdb-tooltip-init title="Set due date">
              <i className="fas fa-calendar-alt fa-lg me-3"></i>
            </a>
            <input
              type="text"
              className="form-control form-control-lg"
              id="exampleFormControlInput1"
              placeholder="Add Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <a href="#!" data-mdb-tooltip-init title="Set due date">
              <i className="fas fa-calendar-alt fa-lg me-3"></i>
            </a>
            <div>
              <button
                type="button"
                data-mdb-button-init
                data-mdb-ripple-init
                className="btn btn-primary"
                onClick={addNewTassk}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addtodo;
