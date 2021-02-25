import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Tooltip from "@material-ui/core/Tooltip";
const ListItem = (props) => {
  const { text, id, deleteEntry } = props;
  const [TaskDone, setTaskDone] = useState(false);
  return (
    <li>
      <div className="listItem">
        <CheckCircleIcon
          className="uiIcon"
          style={TaskDone ? { color: "green" } : { color: "#123d66" }}
          onClick={() => {
            setTaskDone(!TaskDone);
          }}
        />

        <Tooltip title="Delete Item">
          <DeleteIcon
            className="uiIcon"
            style={{ color: "red" }}
            onClick={() => {
              deleteEntry(id);
            }}
          />
        </Tooltip>

        <p
          className="listText"
          style={TaskDone ? { color: "green" } : { color: "#123d66" }}
        >
          {text}
        </p>
      </div>
    </li>
  );
};
export default ListItem;
