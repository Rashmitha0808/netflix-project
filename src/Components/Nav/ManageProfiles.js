import React, { useState } from "react";
import "../Nav/Manage.css";

const ManageProfiles = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleEditEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleEditPassword = (e) => {
    setPassword(e.target.value);
  };
  const handleEditPhone = (e) => {
    setPhone(e.target.value);
  };
  return (
    <div className="profile_container">
      <div className="main_container">
        <div className="profile">Account</div>
        <hr />

        <div className="profile_edit ">
          <div className="profile_headings">Membershi & Billing</div>
          <div className="profile_details">
            <p>rashmikulal831@gmail.com</p>
            <p>Password: *********</p>
            <p>Phone: 990909099090</p>
          </div>
          <div className="edit_section">
            <p className="edit">Change email</p>
            <p className="edit">Change password</p>
            <p className="edit">Change phone number</p>
          </div>
          <div className="edit_save">
            <button onClick={handleEditEmail} className="save">
              Save Email
            </button>
            <button onClick={handleEditPassword} className="save">
              Save Password
            </button>
            <button onClick={handleEditPhone} className="save">
              Save
            </button>
          </div>
        </div>

        <hr />
        <div className="profile_plan">
          <div className="profile_headings">Plan details</div>
          <div className="profile_info">
            <b>Basic HD</b>
          </div>
        </div>

        <hr />
        <div className="profile_user">
          <div className="profile_headings">PROFILE & PARENTAL CONTROLS</div>
          <div aria-expanded="false" className="profile-header">
            <img
              className="activeProfile"
              src="https://occ-0-6624-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABR2_CnwLC_fGf1EGaAxpU3cAzAwjj4q3yVg_n99iZREET5eSWAZ_B0kemHB5GOEPXtk7ekGULELzDrWZk4WCAULubeSwxTg_UQ.png?r=229"
              alt="Rashmitha"
            />
            <div className="profile-summary">
              <h3>Rashmitha</h3>
              <div>All Maturity Ratings</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProfiles;
