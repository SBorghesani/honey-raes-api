export const checkUserEmail = (userEmail) => {
    return fetch(`http://localhost:8088/customers?email=${userEmail}`)
        .then(res => res.json())
}

export const createNewUser = (user) => {
    return fetch("http://localhost:8088/customers", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(res => res.json())
}

export const getCustomers = () => {
    return fetch("http://localhost:8088/customers")
        .then(res => res.json())
}

export const getEmployee = (id) => {
    return fetch(`http://localhost:8088/employees/${id}`)
        .then(res => res.json())
}

export const getAllEmployees = () => {
    return fetch("http://localhost:8088/employees")
        .then(response => response.json())
}

export const createNewEmployee = (employee) => {
    return fetch("http://localhost:8088/employees", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(employee)
    })
}

export const getServiceTicket = (id) => {
    return fetch(`http://localhost:8088/serviceTickets/${id}?_expand=customer&_expand=employee`)
        .then(res => res.json())
}

export const getAllServiceTickets = () => {
    return fetch("http://localhost:8088/serviceTickets?_expand=employee&_expand=customer")
        .then(response => response.json())
}

export const createNewTicket = (id, newTicket) => {
    return fetch(`http://localhost:8088/serviceTickets/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTicket)
    })
}

export const deleteServiceTicket = (ticketId) => {
    return fetch(`http://localhost:8088/serviceTickets/${ticketId}`, {
        method: "DELETE"
    })
}

