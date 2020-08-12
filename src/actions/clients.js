import axios from 'axios';

// set the array of clients to state
export const setClients = (clients) => ({
    type: 'SET_CLIENTS',
    clients: clients,
    errors: ''
});

// set the client error to state if error after request
export const setClientsError = () => ({
    type: 'SET_CLIENTS',
    clients: [],
    errors: 'clients'
});

// get the array of clients from the API
export const startSetClients = () => {
    return (dispatch) => {
        return axios.get('/api/clients')
            .then(clients => {
                const data = clients.data.sort((a, b) => (a.name > b.name) ? 1 : -1)
                dispatch(setClients(data))
            })
            .catch(err => {
                console.log('Error in recieving ciients list')
                console.log(err)
                dispatch(setClientsError())
            })
    }
}