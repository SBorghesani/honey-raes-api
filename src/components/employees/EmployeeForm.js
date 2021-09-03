import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createNewEmployee } from "../ApiManager";

export const EmployeeForm = () => {
    const [employee, updateEmployee] = useState({
        name: "",
        specialty: "",
    });

    const history = useHistory()

    const submitEmployee = (event) => {
        event.preventDefault()
        const newEmployee = {
            name: employee.name,
            specialty: employee.specialty
        }

        return createNewEmployee(newEmployee)
            .then(() => {
                history.push("/employees")
            })
    }

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee Form</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        onChange={
                            (event) => {
                                const copyState = { ...employee }
                                copyState.name = event.target.value
                                updateEmployee(copyState)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Your Name" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="specialty">Specialty:</label>
                    <input
                        onChange={
                            (event) => {
                                const copyState = { ...employee }
                                copyState.specialty = event.target.value
                                updateEmployee(copyState)
                            }
                        }
                        type="text"
                        className="form-control"
                        placeholder="Your Specialty" />
                </div>
            </fieldset>

            <button className="btn btn-primary" onClick={submitEmployee}>
                Submit
            </button>
        </form>
    )
}