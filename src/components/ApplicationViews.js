import React from "react";
import { Route } from "react-router-dom";
import { CustomerList} from './customers/CustomerList';
import { EmployeeList } from './employees/Employees';
import { TicketList } from './serviceTickets/TicketList';
import { TicketForm } from './serviceTickets/TicketForm';
import { EmployeeForm } from './employees/EmployeeForm';

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/customers">
                <CustomerList />
            </Route>

            <Route exact path="/employees">
                <EmployeeList />
            </Route>

            <Route exact path="/serviceTickets">
                <TicketList />
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