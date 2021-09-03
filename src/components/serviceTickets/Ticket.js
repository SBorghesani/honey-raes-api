import React, { useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"
import { createNewTicket, getAllEmployees, getServiceTicket } from "../ApiManager"

export const Ticket = () => {
    const [ticket, assignTicket] = useState({})  // State variable for current ticket object
    const [employees, syncEmployees] = useState([])  // State variable for array of employees
    const { ticketId } = useParams()  // Variable storing the route parameter
    const history = useHistory()

    useEffect(
        () => {
            getServiceTicket(ticketId)
                .then((data) => {
                    assignTicket(data)
                })
            // Alt way to perform 2nd .then:
            // .then(assignTicket)


        },
        [ticketId]  // Above function runs when the value of ticketId change
    )

    // Fetch all employees
    useEffect(
        () => {
            getAllEmployees()
                .then(syncEmployees)
        },
        []  // Empty dependency array only reacts to JSX initial rendering
    )

    // Function to invoke when an employee is chosen from <select> element
    const assignEmployee = (evt) => {

        // Construct a new object to replace the existing one in the API
        const updatedTicket = {
            customerId: ticket.customerId,
            employeeId: parseInt(evt.target.value),
            description: ticket.description,
            emergency: ticket.emergency,
            dateCompleted: ticket.dateCompleted
        }

        // Perform the PUT HTTP request to replace the resource
        createNewTicket(ticketId, updatedTicket)
            .then(() => {
                history.push("/serviceTickets")
            })
    }


    return (
        <>
            <section className="ticket">
                <h3 className="ticket__description">{ticket.description}   (Ticket# {ticketId})</h3>
                <div className="ticket__customer">Submitted by {ticket.customer?.name}</div>
                <div className="ticket__employee">Assigned to
                <select
                        value={ticket.employeeId}
                        onChange={assignEmployee}>
                        {
                            employees.map(e => <option key={`employee--${e.id}`} value={e.id}>{e.name}</option>)
                        }
                    </select>
                </div>
            </section>
        </>
    )
}
