import React, { useEffect, useState } from "react";
import { listEmployees } from "../services/EmoployeeService";
import { useNavigate } from "react-router-dom";

const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    listEmployees()
      .then((response) => {
        console.log("API response:", response.data);
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function addNewEmplpoyee() {
    navigator("/add-amployee");
  }

  return (
    <div className="container">
      <h2 className="text-center">Employees List</h2>
      <button type="button" class="btn btn-primary" onClick={addNewEmplpoyee}>
        add employee
      </button>
      <table className="table table-striped table-bordered ">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;
