import React, { useEffect, useState } from "react"


export const EmployeeList = () => {
    const [employees, setEmployee] = useState([])
    const [specialties, setSpecialties] = useState("")

    useEffect(
        () => {
            fetch("http://localhost:8088/employees")
                .then(response => response.json())
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
                Specialties: { specialties }
            </div>
            {
                employees.map(
                    (employee) => {
                        return <p key={`employee--${employee.id}`}>{employee.name}</p>
                    }
                )
            }
        </>
    )
}

