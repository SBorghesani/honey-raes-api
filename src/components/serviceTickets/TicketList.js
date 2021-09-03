import React, { useEffect, useState } from "react"
import { useHistory, Link } from 'react-router-dom'
import { getAllServiceTickets, deleteServiceTicket } from "../ApiManager"
import './Tickets.css'

export const TicketList = () => {
    const [tickets, updateTickets] = useState([])
    const history = useHistory()

    useEffect(
        () => {
            getAllServiceTickets()
                .then((data) => {
                    updateTickets(data)
                })
        },
        []
    )
    
    const deleteTicket = (id) => {
        deleteServiceTicket(id)
            .then(() => {
                getAllServiceTickets()
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