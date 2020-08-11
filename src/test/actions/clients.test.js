import { setClients, setClientsError, startSetClients } from '../../actions/clients';
import { clients } from '../data/clients';
import axios from 'axios';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

jest.mock('axios');

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

test('setClients should setup set clients action object', () => {
    const action = setClients(clients);
    expect(action).toEqual({
        type: 'SET_CLIENTS',
        clients: clients,
        errors: ''
    });
})

test('setClientsError should setup set clients error action object', () => {
    const action = setClientsError();
    expect(action).toEqual({
        type: 'SET_CLIENTS',
        clients: [],
        errors: 'clients'
    });
})

test('startSetClients should successfully dipatch setClients action with clients sorted', () => {
    const response = {
        data: clients
    }

    axios.get.mockResolvedValue(response)

    const sortedClients = response.data.sort((a, b) => (a.name > b.name) ? 1 : -1)

    const expectedActions = [setClients(sortedClients)]
    
    const store = mockStore({ clients: [] })

    store.dispatch(startSetClients()).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
    })
})

test('startSetClients should successfully dipatch setClientsError action', () => {
    const response = {}
    
    axios.get.mockRejectedValue(response)

    const expectedActions = [setClientsError()]
    
    const store = mockStore({ clients: [] })

    store.dispatch(startSetClients()).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
    })
})

