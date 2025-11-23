import React from "react";

export default function Projects() {
  const projects = [
    {id:1, name:"Campus Study Group", desc:"Group for weekly study", members:5},
    {id:2, name:"Design Sprint", desc:"UI/UX sprint", members:4}
  ];

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4>Projects</h4>
        <button className="btn btn-primary btn-sm">New Project</button>
      </div>

      <div className="row g-3">
        {projects.map(p => (
          <div className="col-12 col-md-6" key={p.id}>
            <div className="card">
              <div className="card-body">
                <h5>{p.name}</h5>
                <p className="small text-muted">{p.desc}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="small text-muted">{p.members} members</div>
                  <button className="btn btn-sm btn-outline-primary">Open</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
