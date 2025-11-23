import React from "react";

function StatCard({ title, value, accent }) {
  return (
    <div className="card stat-card h-100">
      <div className="card-body d-flex flex-column justify-content-between">
        <div className="d-flex justify-content-between">
          <div>
            <h6 className="mb-1">{title}</h6>
            <h4 className="mb-0">{value}</h4>
          </div>
          <div className={`stat-dot ${accent}`} />
        </div>
      </div>
    </div>
  );
}

export default function Dashboard() {
  // placeholder data
  const recent = [
    { id: 1, name: "Write proposal", due: "2025-11-24", progress: "60%", assignee: "Alex" },
    { id: 2, name: "Design mockup", due: "2025-11-26", progress: "30%", assignee: "Sam" },
  ];

  return (
    <div className="dashboard-page">
      <div className="d-flex gap-3 mb-4">
        <div className="flex-grow-1">
          <div className="row g-3">
            <div className="col-12 col-md-4">
              <StatCard title="Total Tasks" value="24" accent="green" />
            </div>
            <div className="col-12 col-md-4">
              <StatCard title="In Progress" value="8" accent="teal" />
            </div>
            <div className="col-12 col-md-4">
              <StatCard title="Completed" value="12" accent="gold" />
            </div>
          </div>

          <div className="card mt-3">
            <div className="card-body">
              <h5 className="card-title">Recent Tasks</h5>
              <ul className="list-group list-group-flush">
                {recent.map((r) => (
                  <li key={r.id} className="list-group-item d-flex justify-content-between align-items-center">
                    <div>
                      <div className="fw-bold">{r.name}</div>
                      <div className="small text-muted">Due {r.due} • {r.assignee}</div>
                    </div>
                    <div className="small text-muted">{r.progress}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="col-right" style={{width: '320px'}}>
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">Schedule</h6>
              <div className="small text-muted">Next Meeting • Nov 22 • 2:00 PM</div>
              <hr />
              <div>
                <h6 className="mb-1">Today</h6>
                <div className="small">Standup meeting • 10:00 AM</div>
              </div>
            </div>
          </div>

          <div className="card mt-3">
            <div className="card-body">
              <h6 className="card-title">Task List</h6>
              <div className="small text-muted">Click a task to view details (placeholder)</div>
              <div className="mt-2">
                <table className="table table-sm">
                  <thead>
                    <tr>
                      <th>Task</th>
                      <th>Due</th>
                      <th>Progress</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Write proposal</td>
                      <td>Nov 24</td>
                      <td>60%</td>
                    </tr>
                    <tr>
                      <td>Design mockup</td>
                      <td>Nov 26</td>
                      <td>30%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
