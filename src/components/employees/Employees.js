import React, { useEffect, useState } from "react"
import { useHistory, Link } from "react-router-dom"
import { getAllEmployees } from "../ApiManager"


export const EmployeeList = () => {
    const [employees, setEmployee] = useState([])
    const [specialties, setSpecialties] = useState("")
    const history = useHistory()

    useEffect(
        () => {
            getAllEmployees()
                .then((employeeArray) => {
                    setEmployee(employeeArray)
                })
        },
        []
    )

    useEffect(() => {
        const justSpecialties = employees.map(employee => employee.specialty)
        setSpecialties(justSpecialties.join(", "))
    }, [employees])

    return (
        <>
            <div>
                <button onClick={() => history.push("/employees/EmployeeForm")}>Apply</button>
            </div>

            <div>
                Specialties: {specialties}
            </div>
            {
                employees.map(
                    (employee) => {
                        return <p key={`employee--${employee.id}`}>
                            <Link to={`/employees/${employee.id}`}>{employee.name}</Link>
                            </p>
                    }
                )
            }
        </>
    )
}

