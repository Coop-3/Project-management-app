import React from "react";

export default function MyTasks() {
  // placeholder task rows
  const tasks = [
    { id:1, name:"Write proposal", start:"2025-11-20", due:"2025-11-24", progress:60, assignee:"Alex", priority:"High" },
    { id:2, name:"Design mockup", start:"2025-11-21", due:"2025-11-26", progress:30, assignee:"Sam", priority:"Medium" },
  ];

  return (
    <div>
      <div className="d-flex justify-content-between mb-3">
        <h4>My Tasks</h4>
        <div>
          <button className="btn btn-outline-secondary btn-sm me-2">Timeline</button>
          <button className="btn btn-outline-secondary btn-sm me-2">Calendar</button>
          <button className="btn btn-primary btn-sm">List</button>
        </div>
      </div>

      <div className="card">
        <div className="card-body p-0">
          <table className="table mb-0">
            <thead className="table-light">
              <tr>
                <th>Task</th>
                <th>Start</th>
                <th>Due</th>
                <th>Priority</th>
                <th>Progress</th>
                <th>Assignee</th>
                <th>Attachments</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map(t => (
                <tr key={t.id}>
                  <td>{t.name}</td>
                  <td>{t.start}</td>
                  <td>{t.due}</td>
                  <td>{t.priority}</td>
                  <td>
                    <div className="progress" style={{height: "10px"}}>
                      <div className="progress-bar" role="progressbar" style={{width: `${t.progress}%`}} aria-valuenow={t.progress} aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </td>
                  <td>{t.assignee}</td>
                  <td>—</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
