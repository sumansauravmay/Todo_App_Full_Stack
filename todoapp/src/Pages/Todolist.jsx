import React, { useEffect, useState } from "react";
import axios from "axios";
import Login from "./Login";
import TodoItem from "../components/TodoItem";

const Todolist = () => {
  let [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [filter, setFilter] = useState("All");


  let token = JSON.parse(localStorage.getItem("token"));
  console.log("tfetch", token);

  let getData = () => {
    const headers = { Authorization: token };
    fetch(`https://todo-app-full-stack-f52j.onrender.com/todo/get`, { headers })
      .then((res) => res.json())
      .then((res) => {
        // console.log("task", res.msg);
        setData(res.msg);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  useEffect(() => {
    getData();
  }, []);

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
        // console.log("Task added:", response.data);
        setTitle("");
        setDescription("");
        getData();
      })
      .catch((err) => {
        console.log("Error adding task:", err);
      });
  };

  const handleToggle = (id) => {
    const headers = {
      Authorization: token,
      "Content-Type": "application/json",
    };

    axios
      .patch(
        `https://todo-app-full-stack-f52j.onrender.com/todo/update/${id}`,
        {},
        { headers }
      )
      .then((res) => {
        console.log("status", res);
        getData();
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const handleDelete = (id) => {
    const headers = {
      Authorization: token,
      "Content-Type": "application/json",
    };
    axios
      .delete(
        `https://todo-app-full-stack-f52j.onrender.com/todo/delete/${id}`,
        { headers }
      )
      .then((res) => {
        console.log(res.data);
        getData();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  if (!token) {
    return <Login />;
  }

  const filteredData = data.filter((todo) => {
    if (filter === "Completed") {
      return todo.status === true;
    } else if (filter === "Not Completed") {
      return todo.status === false;
    } else {
      return true; 
    }
  });


  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card" id="list1">
              <div className="card-body py-4 px-4 px-md-5">
                <p className="h1 text-center mt-3 mb-4 pb-3 text-primary">
                  <i className="fas fa-check-square me-1"></i>
                  <u>Todo List</u>
                </p>

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

                <hr className="my-4" />

                <div className="d-flex justify-content-end align-items-center mb-4 pt-2 pb-3">
                  <p className="small mb-0 me-2 text-muted">Filter</p>
                  <select data-mdb-select-init
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  >
                    <option value="All">All</option>
                    <option value="Completed">Completed</option>
                    <option value="Not Completed">Not Completed</option>
                  </select>
                </div>

                {filteredData?.map((todo) => (
                  <div>
                    <TodoItem title={todo.title} description={todo.description} status={todo.status ? "Completed" : "Incomplete"} createdBy={todo.createdBy} handleDelete={()=>handleDelete(todo._id)} handleToggle={()=>handleToggle(todo._id)}/>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Todolist);
