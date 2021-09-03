import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getEmployee } from "../ApiManager"

export const Employee = () => {
    const [employee, assignEmployee] = useState({})  // State variable for current ticket object
    const { employeeId } = useParams()  // Variable storing the route parameter

    useEffect(
        () => {
            getEmployee(employeeId)
                .then(assignEmployee)
        },
        [ employeeId ]  // Above function runs when the value of ticketId change
    )

    return (
        <>
            <section className="employee">
                <h3 className="employee__name">{employee.name}</h3>
                <div className="employee__specialty">Specialty: {employee.specialty}</div>
            </section>
        </>
    )
}
