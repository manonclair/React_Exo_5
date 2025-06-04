import { NavLink } from "react-router-dom";
import { tasks } from "../data/tasks";

export default function TaskList() {
  return (
    <div className="container">
      <h1 className="text-2xl font-bold mb-4">Liste des tâches</h1>
      <ul className="tache-list">
        {tasks.map((task) => (
          <li key={task.id}>
            <NavLink to={`/tasks/${task.id}`}>
              <strong>{task.title}</strong>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
