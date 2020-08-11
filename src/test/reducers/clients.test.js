import clientsReducer from '../../reducers/clients';
import { clients } from '../data/clients';


test('clientsReducer should return default empty array', () => {
    const result = clientsReducer(undefined, {type: '@@INIT'});

    expect(result).toEqual([]);
})


test('clientsReducer returns correct state for SET_CLIENTS', () => {
    const action = {
        type: 'SET_CLIENTS',
        clients: clients
    }

    const newState = clients

    const result = clientsReducer(undefined, action)

    expect(result).toEqual(newState)
})

test('clientsReducer returns correct state for SET_CLIENTS even with current state', () => {
    const action = {
        type: 'SET_CLIENTS',
        clients: clients
    }

    const currentState = [
        {
            "id": 7,
            "name": "Trupe",
            "logo": "https://storage.googleapis.com/mock-logos/logo-7.png"
          }
    ]

    const newState = clients

    const result = clientsReducer(currentState, action)

    expect(result).toEqual(newState)
})