import React from 'react';
import './index.css';

const EditProfile = () => {
      return (
        <div>
          <div className="container">
            <h1>Edit Profile</h1>
            <hr />
            <div className="row">
              {/* left column */}
              <div className="col-md-3">
                <div className="text-center">
                  <img src="//placehold.it/100" className="avatar img-circle" alt="avatar" />
                  <h6>Upload a different photo...</h6>
                  <input type="file" className="form-control" />
                </div>
              </div>
              {/* edit form column */}
              <div className="col-md-9 personal-info">
                <h3>Personal info</h3>
                <form className="form-horizontal">
                  <div className="form-group">
                    <label className="col-lg-3 control-label">First name:</label>
                    <div className="col-lg-8">
                      <input className="form-control" type="text" placeholder="First Name" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-lg-3 control-label">Last name:</label>
                    <div className="col-lg-8">
                      <input className="form-control" type="text" placeholder="Last Name" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-lg-3 control-label">Bio:</label>
                    <div className="col-lg-8">
                      <textarea className="form-control" type="text" placeholder="Tell us about yourself!" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-lg-3 control-label">Email:</label>
                    <div className="col-lg-8">
                      <input className="form-control" type="text" placeholder="Email" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-md-3 control-label">Username:</label>
                    <div className="col-md-8">
                      <input className="form-control" type="text" placeholder="Username" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-md-3 control-label">Password:</label>
                    <div className="col-md-8">
                      <input className="form-control" type="password" placeholder="**********" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-md-3 control-label">Confirm password:</label>
                    <div className="col-md-8">
                      <input className="form-control" type="password" placeholder="**********" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-md-3 control-label" />
                    <div className="col-md-8">
                      <input type="button" className="btn btn-primary" defaultValue="Save Changes" />
                      <span />
                      <input type="reset" className="btn btn-default" defaultValue="Cancel" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <hr />
        </div>
      );
  };

  export default EditProfile;
