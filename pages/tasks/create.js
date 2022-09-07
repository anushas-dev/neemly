import { useState } from "react";
import swal from 'sweetalert';
const error = "Ghost ate all your tasks!";
var isCreated;

export default function CreateTask() {
  const [task_name, setTask] = useState("");
  const [task_description, setDescription] = useState("");
  const [time_left, setTime] = useState("");

  const newTask = async () => {
    const response = await fetch("http://localhost:3000/api/tasks", {
      method: "POST",
      body: JSON.stringify({
        name: task_name,
        description: task_description,
        time_left: time_left,
        time_taken: "0h",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
    );
    isCreated = response.ok;
    if(isCreated) {
      swal("Task Created Successfully!","", "success")
    }
    else {
      swal("Task was not created!", "", "error");
    }
   
  };
  return (
    <div>
      <h2>Create New Task</h2>

      {isCreated && (
        <div class="alert alert-danger w-75" role="alert">
          Task couldn't be created, Error: {error}
        </div>
      )}

      <br></br>
      <div class="form-control mb-3 w-75 center">
        <div>
          <div class="mb-3">
            <label for="task" class="form-label">
              Task Name
            </label>
            <input
              type="text"
              class="form-control"
              id="task"
              placeholder="Buy Tomatoes"
              value={task_name}
              onChange={(e) => setTask(e.target.value)}
            ></input>
          </div>
          <div class="mb-3">
            <label for="taskdescription" class="form-label">
              Description
            </label>
            <textarea
              class="form-control"
              id="taskdescription"
              rows="3"
              value={task_description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div class="mb-3">
            <label for="tasktime" class="form-label">
              Task Time
            </label>
            <input
              type="text"
              class="form-control"
              id="tasktime"
              placeholder="2h"
              value={time_left}
              onChange={(e) => setTime(e.target.value)}
            ></input>
          </div>
        </div>
        <button onClick={newTask} class="btn btn-sm btn-primary">
          Create
        </button>
      </div>
    </div>
  );
}
