import React, { useEffect, useState } from "react";
import axios from "axios";

const Todolist = () => {
  let [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

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
                  <select data-mdb-select-init>
                    <option value="1">All</option>
                    <option value="2">Completed</option>
                    <option value="3">Not Completed</option>
                  </select>
                  <p className="small mb-0 ms-4 me-2 text-muted">Sort</p>
                  <select data-mdb-select-init>
                    <option value="1">Added date</option>
                    <option value="2">Due date</option>
                  </select>
                  <a href="#!">
                    <i className="fas fa-sort-amount-down-alt ms-2"></i>
                  </a>
                </div>

                {data?.map((todo) => (
                  <ul
                    className="list-group list-group-horizontal rounded-0 bg-transparent"
                    key={todo._id}
                  >
                    <li className="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
                      <p className="lead fw-normal mb-0">{todo.title}</p>
                    </li>
                    <li className="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
                      <p className="lead fw-normal mb-0">{todo.description}</p>
                    </li>
                    <li className="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
                      <p className="lead fw-normal mb-0">
                        Status:{todo.status ? "Completed" : "Incomplete"}
                      </p>
                    </li>
                    <li className="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
                      <p className="lead fw-normal mb-0">
                        createdby:{todo.createdBy}
                      </p>
                    </li>
                    <li className="list-group-item ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
                      <div className="d-flex flex-row justify-content-end mb-1">
                        <button
                          className="text-info"
                          data-mdb-tooltip-init
                          title="Edit todo"
                          onClick={() => handleToggle(todo._id)}
                        >
                          Toggle
                        </button>

                        <button
                          className="text-danger"
                          data-mdb-tooltip-init
                          title="Delete todo"
                          onClick={() => handleDelete(todo._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </li>
                  </ul>
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
