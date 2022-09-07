const error = "Ghost ate alls your tasks!" 

export default function CreateTask() {
  return (
    <div>
      <h2>Create New Task</h2>
      <div class="alert alert-success w-75" role="alert">
        Task created succesfully!
      </div>
      <div class="alert alert-danger w-75" role="alert">
        Task couldn't be created, Error: {error}
      </div>
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
              placeholder="2 hours"
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
}
