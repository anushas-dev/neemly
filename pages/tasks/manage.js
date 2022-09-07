import Link from "next/link";

export async function getServerSideProps() {
  // Fetch data from API
  const res = await fetch(`http://localhost:3000/api/tasks`);
  const tasks = await res.json();

  // Pass data to the page via props
  return { props: { tasks } };
}

export default function ManageTask({ tasks }) {
  return (
    <div>
      <h1>Manage Tasks</h1>
      <br></br>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Task</th>
            <th scope="col">Time Taken</th>
            <th scope="col">Time Left</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr scope="row">
              <td key="{task}" href="/tasks/{task.id}">{task.id}</td>
              <td>{task.name}</td>
              <td>{task.time_taken}</td>
              {task.time_left === '0h' && (
                <td className="table-dark">{task.time_left}</td>
              )}
              {task.time_left != '0h' && (
                <td className="table-info">{task.time_left}</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
