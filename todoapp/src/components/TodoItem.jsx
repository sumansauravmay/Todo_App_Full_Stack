import React from "react";

const TodoItem = ({title, description, status,createdBy,handleToggle,handleDelete}) => {
  return (
    <ul
      className="list-group list-group-horizontal rounded-0 bg-transparent"
      
    >
      <li className="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
        <p className="lead fw-normal mb-0">{title}</p>
      </li>
      <li className="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
        <p className="lead fw-normal mb-0">{description}</p>
      </li>
      <li className="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
        <p className="lead fw-normal mb-0">
          Status:{status}
        </p>
      </li>
      <li className="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
        <p className="lead fw-normal mb-0">createdby:{createdBy}</p>
      </li>
      <li className="list-group-item ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
        <div className="d-flex flex-row justify-content-end mb-1">
          <button
            className="text-info"
            data-mdb-tooltip-init
            title="Edit todo"
            onClick={handleToggle}
          >
            Toggle
          </button>

          <button
            className="text-danger"
            data-mdb-tooltip-init
            title="Delete todo"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </li>
    </ul>
  );
};

export default TodoItem;
