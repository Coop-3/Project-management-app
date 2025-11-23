import React from "react";

export default function Settings() {
  return (
    <div>
      <h4>Settings</h4>
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-3">
            <div className="card-body">
              <h6>Profile</h6>
              <div className="mb-2">Change display name, username, profile picture</div>
              <button className="btn btn-outline-secondary btn-sm">Edit Profile</button>
            </div>
          </div>

          <div className="card mb-3">
            <div className="card-body">
              <h6>Account</h6>
              <div className="mb-2">Change email / password</div>
              <button className="btn btn-outline-secondary btn-sm">Manage Account</button>
            </div>
          </div>

        </div>

        <div className="col-md-6">
          <div className="card mb-3">
            <div className="card-body">
              <h6>Notifications</h6>
              <div className="mb-2">Manage notification preferences & alert behaviors</div>
              <button className="btn btn-outline-secondary btn-sm">Preferences</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
