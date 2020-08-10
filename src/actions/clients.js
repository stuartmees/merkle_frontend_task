import axios from 'axios';

export const setClients = (clients) => ({
    type: 'SET_CLIENTS',
    clients: clients,
    errors: ''
});

export const setClientsError = () => ({
    type: 'SET_CLIENTS',
    clients: [],
    errors: 'clients'
});

export const startSetClients = () => {
    return (dispatch) => {
        axios.get('/api/clients')
            .then(clients => {
                const data = clients.data.sort((a, b) => (a.name > b.name) ? 1 : -1)
                dispatch(setClients(data))
            })
            .catch(err => {
                console.log(err)
                dispatch(setClientsError())
            })
    }
}