import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Step2({ nameHandler }) {
  const navigate = useNavigate();
  const [F_name, setF_Name] = useState("");
  const [L_name, setL_name] = useState("");

  const handleFirstName = (event) => {
    setF_Name(event.target.value);
  };

  const handleLastName = (event) => {
    setL_name(event.target.value);
  };
  const handleNextClickBtn = (e) => {
    e.preventDefault();

    // Perform validation on first name and last name fields
    if (F_name.trim() === "") {
      alert("Please enter your first name.");
      return;
    }

    if (L_name.trim() === "") {
      alert("Please enter your last name.");
      return;
    }

    nameHandler({ F_name, L_name });
    navigate("/showData");
  };

  return (
    <div   
      className="text-center container mt-5"
      style={{ backgroundColor: "#e9ecef", width: "300px", height: "250px" }}
    >
      <h4 className="text-primary" style={{marginTop:'10px'}}>Please Enter Name:</h4>

      <form onSubmit={handleNextClickBtn}>
        <div style={{ marginLeft: "40px" }}>
          <div className="form-group">
            <input
              type="text"
              name="F_name"
              className={`form-control ${
                F_name.trim() === "" ? "is-invalid" : ""
              }`}
              placeholder="Enter First Name:"
              value={F_name}
              onChange={handleFirstName}
              style={{ width: "200px" }}
            />
            {F_name.trim() === "" && (
              <div className="invalid-feedback">
                Please enter your first name.
              </div>
            )}
          </div>

          <div className="form-group">
            <input
              type="text"
              name="L_name"
              className={`form-control ${
                L_name.trim() === "" ? "is-invalid" : ""
              }`}
              placeholder="Enter Last Name:"
              value={L_name}
              onChange={handleLastName}
              style={{ width: "200px" }}
            />
            {L_name.trim() === "" && (
              <div className="invalid-feedback">
                Please enter your last name.
              </div>
            )}
          </div>
        </div>
        <br></br>
        <Link to="/addNumber" className="btn btn-secondary mr-2">
          Back
        </Link>

        <button
          type="submit"
          className="btn btn-primary"
          style={{ marginLeft: "30px" }}
        >
          Next
        </button>
      </form>
    </div>
  );
}
