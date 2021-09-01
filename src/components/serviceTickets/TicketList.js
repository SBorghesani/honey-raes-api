import React, { useEffect, useState } from "react"
import { useHistory, Link } from 'react-router-dom'
import './Tickets.css'


export const TicketList = () => {
    const [tickets, updateTickets] = useState([])
    const history = useHistory()

    useEffect(
        () => {
            fetch("http://localhost:8088/serviceTickets?_expand=employee&_expand=customer")
                .then(response => response.json())
                .then((data) => {
                    updateTickets(data)
                })
        },
        []
    )
    const deleteTicket = (id) => {
        fetch(`http://localhost:8088/serviceTickets/${id}`, {
            method: "DELETE"
        })
            .then(() => {
                fetch("http://localhost:8088/serviceTickets?_expand=employee&_expand=customer")
                .then(response => response.json())
                .then((data) => {
                    updateTickets(data)
                })
            })
    }



    return (
        <>
            <div>
                <button onClick={() => history.push("/serviceTickets/create")}>Create Ticket</button>
            </div>

            {
                tickets.map(
                    (ticket) => {
                        return <div key={`ticket--${ticket.id}`}>
                            <p className={`ticket ${ticket.emergency ? 'emergency' : ''}`}>
                                {ticket.emergency ? "🚑" : ""} <Link to={`/tickets/${ticket.id}`}>{ticket.description}</Link>
                                <button onClick={() => {
                                    deleteTicket(ticket.id)
                                }}>Delete</button>
                            </p>

                        </div>
                    }

                )
            }
        </>
    )
}