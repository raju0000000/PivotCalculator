import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const AddNumber = ({ numArr }) => {
  const navigate = useNavigate();
  const [numbers, setNumbers] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddNumber = () => {
    setNumbers([...numbers, Number(inputValue)]);
    setInputValue("");
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setInputValue("");
  };

  const handleDeleteNumber = (index) => {
    const updatedNumbers = [...numbers];
    updatedNumbers.splice(index, 1);
    console.log(updatedNumbers)
    setNumbers(updatedNumbers);
  };

  const handleNextClickBtn = () => {
    numArr(numbers);
    navigate("/step2");
  };

  return (
    <div className="container mt-5">
      <div className="card mx-auto" style={{ maxWidth: "500px" }}>
        <div className="card-body text-center" style={{ backgroundColor: "#28a745" }}>
          <h3 className="card-title">Enter Number:</h3>
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                placeholder="Enter number"
                value={inputValue}
                onChange={handleInputChange}
              />
            </div>
            <button type="button" onClick={handleAddNumber} className="btn btn-primary">
              Add
            </button>
          </form>
          <br />
          <ul className="list-group">
            {numbers.map((number, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {number}
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteNumber(index)}
                >
                  -
                </button>
              </li>
            ))}
          </ul>
          <br />
          <Link to="/" className="btn btn-secondary">
            Back
          </Link>
          <button
            onClick={handleNextClickBtn}
            className="btn btn-primary ml-5"
            style={{ marginLeft: "10px" }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNumber;



