import React, { useEffect, useState } from "react";

const Todolist = () => {
  let [data, setData] = useState([]);

  let token = JSON.parse(localStorage.getItem("token"));
  console.log("tfetch", token);

  let getData = () => {
    const headers = { Authorization: token };
    fetch(`https://todo-app-full-stack-f52j.onrender.com/todo/get`, { headers })
      .then((res) => res.json())
      .then((res) => {
        console.log("task", res.msg);
        setData(res.msg);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  useEffect(() => {
    getData();
  }, []);

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
                          placeholder="Add new..."
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
                    <option value="3">Active</option>
                    <option value="4">Has due date</option>
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

                {data.map((todo) => (
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
                        Status:{todo.status ? "completed" : "Not Completed"}
                      </p>
                    </li>
                    <li className="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
                      <p className="lead fw-normal mb-0">
                        createdby:{todo.createdBy}
                      </p>
                    </li>
                    <li className="list-group-item ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
                      <div className="d-flex flex-row justify-content-end mb-1">
                        <a
                          href="#!"
                          className="text-info"
                          data-mdb-tooltip-init
                          title="Edit todo"
                        >
                          Edit<i className="fas fa-pencil-alt me-3"></i>
                        </a>
                        <a
                          href="#!"
                          className="text-danger"
                          data-mdb-tooltip-init
                          title="Delete todo"
                        >
                          Delete<i className="fas fa-trash-alt"></i>
                        </a>
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

export default Todolist;
