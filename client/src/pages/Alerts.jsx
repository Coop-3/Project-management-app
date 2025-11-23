import React from "react";

export default function Alerts() {
  const alerts = [
    {id:1, title:"Help needed on slide 4", project:"Design Sprint", created:"2h ago"},
    {id:2, title:"Broken test in lab", project:"Campus Study Group", created:"1d ago"}
  ];

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4>Alerts</h4>
        <button className="btn btn-warning btn-sm">Create Alert</button>
      </div>

      <div className="list-group">
        {alerts.map(a => (
          <div key={a.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <div className="fw-bold">{a.title}</div>
              <div className="small text-muted">{a.project} • {a.created}</div>
            </div>
            <div>
              <button className="btn btn-outline-secondary btn-sm">View</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
