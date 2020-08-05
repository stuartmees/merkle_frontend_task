import axios from 'axios';

export const setClients = (clients) => ({
    type: 'SET_CLIENTS',
    clients: clients
});

export const startSetClients = () => {
    return (dispatch) => {
        axios.get('/api/clients')
            .then(clients => dispatch(setClients(clients.data)))
            .catch(err => console.log(err))
    }
}