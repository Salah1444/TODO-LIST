import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

function List(props) {
  const [Result, SetResult] = useState("");
  const [isChecked, SetisCheked] = useState(false);
  const Change = (e) => {
    if (e.target.value !== null) {
      props.SetOrder({ todo: e.target.value.trim(), do: isChecked });
    }
  };
  const ChangeHandler = (e) => {
    e.preventDefault();
    if (props.order.todo !== "" && props.order !== "") {
      props.SetOrders([...props.orders, props.order]);
    }
  };
  const handleCheck = (e, todoValue) => {
  const updatedOrders = props.orders.map((item) => {
    if (item.todo.trim() === todoValue.trim()) {
      return { ...item, do: e.target.checked}; 
    }
    return item; // sinon on retourne l’objet tel qu’il est
  });

  props.SetOrders(updatedOrders);
};
  
  return (
    <div className="list-container p-5 bg-dark">
      <div className="card bg-secondary text-light container m-3">
        <h1 className="text-center fw-bold p-3 m-3 alert alert-secodary">To Do List</h1>
        <div className="card-body overflow-scroll">
          {props.orders.map((item, index) => (
            <div
              key={index}
              id={index}
              className="form-check bg-dark p-3 rounded"
            >
              <input
                checked={item.do}
                onChange={(e) => {
                  handleCheck(e,item.todo);
                }}
                className="form-check-input p-2"
                type="checkbox"
               
              />
              <label
                className={`form-check-label h5 fw-bold ${item.do ? 'text-decoration-line-through text-danger':''}`}
                htmlFor={`check-${index}`}
              >
                {item.todo}
              </label>
            </div>
          ))}
        </div>
        <div className="card-footer">
          <form onSubmit={(e) => ChangeHandler(e)}>
            <div className="input-group p-2">
              <div className="input-group mb-3">
                <span className="input-group-text ">
                  <button className="btn btn-dark btn-100" type="submit">
                    <FaPlus color="white" />
                  </button>
                </span>
                <input
                  type="text"
                  className="form-control  fw-bold"
                  name="todo"
                  placeholder="Add To List"
                  onChange={(e) => Change(e)}
                />
              </div>
            </div>
            <div
              className={`alert ${
                Result
                  ? "alert-success"
                  : Result === false
                  ? "alert-danger"
                  : ""
              }`}
            >
              {Result
                ? "Added With Success"
                : Result === false
                ? "You Have Somthing Wrong"
                : ""}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default List;
