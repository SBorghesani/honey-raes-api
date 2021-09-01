import React from "react";
import { Route } from "react-router-dom";
import { CustomerList } from './customers/CustomerList';
import { EmployeeList } from './employees/Employees';
import { TicketList } from './serviceTickets/TicketList';
import { TicketForm } from './serviceTickets/TicketForm';
import { EmployeeForm } from './employees/EmployeeForm';
import { Ticket } from './serviceTickets/Ticket'
import { Employee } from './employees/Employee'

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/customers">
                <CustomerList />
            </Route>

            <Route exact path="/employees">
                <EmployeeList />
            </Route>

            <Route exact path="/employees/:employeeId(\d+)">
                <Employee />
            </Route>

            <Route exact path="/serviceTickets">
                <TicketList />
            </Route>

            <Route exact path="/tickets/:ticketId(\d+)">
                <Ticket />
            </Route>

            <Route path="/serviceTickets/create">
                <TicketForm />
            </Route>

            <Route path="/employees/employeeForm">
                <EmployeeForm />
            </Route>
        </>
    )
}