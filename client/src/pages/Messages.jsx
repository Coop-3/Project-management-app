import React from "react";

export default function Messages() {
  const threads = [
    { id:1, name:"Group A", last:"Can everyone review the doc?"},
    { id:2, name:"Sam", last:"Let's sync tomorrow."}
  ];

  return (
    <div className="d-flex gap-3">
      <div className="card" style={{width: 320}}>
        <div className="card-body">
          <h6>Messages</h6>
          <ul className="list-group list-group-flush">
            {threads.map(t => (
              <li key={t.id} className="list-group-item">
                <div className="fw-bold">{t.name}</div>
                <div className="small text-muted">{t.last}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex-grow-1 card">
        <div className="card-body">
          <h6>Chat — Group A</h6>
          <div className="chat-window" style={{height: 360, overflowY: "auto"}}>
            <div className="mb-2"><strong>Sam:</strong> I pushed an update.</div>
            <div className="mb-2 text-muted small">You: Thanks — checking now.</div>
          </div>

          <div className="mt-3 d-flex gap-2">
            <input className="form-control" placeholder="Write a message..." />
            <button className="btn btn-primary">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}
