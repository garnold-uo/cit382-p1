import React, { useState } from "react";

export default function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    UOID: "",
    resident: "Out-of-State"
  });

  const [data, setData] = useState([]);

  const handleFirstNameInputChange = (event) => {
    setValues({ ...values, firstName: event.target.value });
  };

  const handleLastNameInputChange = (event) => {
    setValues({ ...values, lastName: event.target.value });
  };

  const handleEmailInputChange = (event) => {
    setValues({ ...values, email: event.target.value });
  };

  const handleUOIDInputChange = (event) => {
    setValues({ ...values, UOID: event.target.value });
  };

  const handleResidentInputChange = (event) => {
    setValues({
      ...values,
      resident: event.target.checked ? "Oregon Resident" : "Out-of-State"
    });
  };

  const handleButonClick = (event) => {
    setData([...data, { ...values, id: values.UOID }]);
  };

  return (
    <div className="App">
      <div className="form">
        <div className="form-title">
          <h1>Student Information Form</h1>
        </div>

        <div className="form-input">
          <input
            onChange={handleFirstNameInputChange}
            value={values.firstName}
            id="first-name"
            type="text"
            placeholder="First Name"
          />
          <input
            onChange={handleLastNameInputChange}
            value={values.lastName}
            id="last-name"
            type="text"
            placeholder="Last Name"
          />
          <input
            onChange={handleEmailInputChange}
            value={values.email}
            id="email"
            type="text"
            placeholder="Email"
          />
          <input
            onChange={handleUOIDInputChange}
            id="UOID"
            value={values.UOID}
            type="number"
            placeholder="UOID"
          />
          <input
            onChange={handleResidentInputChange}
            id="resident"
            value={values.resident}
            type="checkbox"
          />
          <label>Oregon Resident</label>
        </div>

        <div className="form-button">
          <button onClick={handleButonClick}>Add Student</button>
        </div>
      </div>

      <div className="data-display">
        <h2>STUDENT INFORMATION</h2>
        {data.length > 0 ? (
          data.map((student) => (
            <p key={student.UOID}>
              {`First Name: ${student.firstName}, Last Name: ${student.lastName}, Email: ${student.email}, UOID: ${student.UOID}, Resident: ${student.resident}`}
            </p>
          ))
        ) : (
          <p>No Current Information</p>
        )}
      </div>
    </div>
  );
}
