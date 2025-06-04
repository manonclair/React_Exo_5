import { useParams, Link } from "react-router-dom";
import { tasks } from "../data/tasks";

export default function TaskDetail() {
  const { id } = useParams();
  const task = tasks.find((t) => t.id === id);

  return (
    <div className="container">
      {task ? (
        <div className="tache-card">
          <h1>{task.title}</h1>
          <p style={{ fontSize: "1rem", color: "#444", marginTop: "24px" }}>
            {task.description}
          </p>
          <Link to="/" className="back-link">← Retour à la liste</Link>
        </div>
      ) : (
        <div className="tache-card">
          <p style={{ color: "red" }}>Tâche non trouvée.</p>
          <Link to="/" className="back-link">← Retour à la liste</Link>
        </div>
      )}
    </div>
  );
}
