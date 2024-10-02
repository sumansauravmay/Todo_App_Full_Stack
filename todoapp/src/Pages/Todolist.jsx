import React, { useEffect, useState } from "react";
import axios from "axios";
import Login from "./Login";
import TodoItem from "../components/TodoItem";
import Addtodo from "../components/Addtodo";

const Todolist = () => {
  let [data, setData] = useState([]);
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



  const handleData=()=>{
    getData()
  }
 
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
                <Addtodo data2={handleData}/>
                
                <hr className="my-4" />

                <div className="d-flex justify-content-end align-items-center mb-4 pt-2 pb-3">
                  <p className="small mb-0 me-2 text-muted">Filter</p>
                  <select
                    data-mdb-select-init
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                  >
                    <option value="All">All</option>
                    <option value="Completed">Completed</option>
                    <option value="Not Completed">Not Completed</option>
                  </select>
                </div>

                {filteredData?.map((todo) => (
                  <div key={todo._id}>
                    <TodoItem
                      title={todo.title}
                      description={todo.description}
                      status={todo.status ? "Completed" : "Incomplete"}
                      createdBy={todo.createdBy}
                      handleDelete={() => handleDelete(todo._id)}
                      handleToggle={() => handleToggle(todo._id)}
                    />
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
