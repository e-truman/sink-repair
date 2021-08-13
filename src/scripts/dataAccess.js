//You will need to store that external data in your application state when you fetch it. Create a property named requests in your application state object. Its initial value must be an empty array.



const applicationState = {
    requests: [],
}


// this is fetching the data so that it is moved from application state.
const API = "http://localhost:8088"

export const fetchRequests = () => {
    return fetch(`${API}/requests`)
        .then(response => response.json())
        .then(
            // this function puts the service requests, the paramater we called in the then function, into the empty array me made
            (serviceRequests) => {
                // Store the external state in application state
                applicationState.requests = serviceRequests
            }
        )
}

// this function creates a copy of the array we put in the requests container
export const getRequests = () => {
    return applicationState.requests
}


