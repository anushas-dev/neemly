import { tasks } from "../../data/tasks";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(tasks);
  } else if (req.method === "POST") {
    const taskObj = {
      id: Date.now(),
      name: req.body.name,
      time_taken: req.body.time_taken,
      time_left: req.body.time_left,
      description: req.body.description,
    };
    tasks.push(taskObj);
    res.status(201).json({ _inserted: taskObj });
  }
}
