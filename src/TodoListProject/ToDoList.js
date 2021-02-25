import React, { useState } from "react";
import ListItem from "./ListItem";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import swal from "sweetalert";
import "./todolistStyle.css";

const ToDoList = () => {
  const [task, updateTask] = useState("");
  const [tasksArray, updateArray] = useState([]);

  const addNewTask = () => {
    if (task !== "") {
      updateArray([...tasksArray, { text: task, id: Math.random() }]);
      updateTask("");
    }
  };

  function deleteTask(id) {
    //removing an entry from tasksArray
    swal({
      title: "Warning",
      text: "Do you really want to delete it",
      icon: "warning",
      buttons: true,
    }).then((res) => {
      if (res) {
        const newArr = tasksArray.filter((taskObj) => {
          return taskObj.id !== id;
        });
        updateArray(newArr);
      }
    });
  }

  function removeAllTasks() {
    if (tasksArray.length !== 0) {
      swal({
        title: "Warning",
        text: "Do you really want to Clear list",
        icon: "warning",
        buttons: true,
      }).then((res) => {
        if (res) {
          updateArray([]);
        }
      });
    }
  }

  return (
    <div className="mainDiv">
      <h1 className="heading"> ToDo List </h1>
      <div className="inputGroup">
        <input
          className="inputBox"
          spellCheck="false"
          placeholder="New List Item"
          onChange={(e) => {
            updateTask(e.target.value);
          }}
          value={task}
        />
        <Tooltip title="Add New">
          <AddCircleIcon onClick={addNewTask} />
        </Tooltip>
      </div>

      <Tooltip title="Remove All">
        <Button className="removeAll" onClick={removeAllTasks}>
          <span className="btnText">Clear</span>
        </Button>
      </Tooltip>

      <div className="tasks">
        <ul className="list">
          {tasksArray.map((taskObj, index) => {
            return (
              <ListItem
                text={taskObj.text}
                key={index}
                id={taskObj.id}
                deleteEntry={deleteTask}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default ToDoList;
