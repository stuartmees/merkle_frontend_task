import errorsReducer from '../../reducers/errors';

const currentState = 'currentState'

test('errorsReducer should return default empty string', () => {
    const result = errorsReducer(undefined, {type: '@@INIT'});

    expect(result).toEqual('');
})

test('errorsReducer returns correct error state for SET_CLIENTS', () => {
    const action = {
        type: 'SET_CLIENTS',
        errors: 'clients'
    }

    const newState = 'clients' 

    const result = errorsReducer(undefined, action)

    expect(result).toEqual(newState)
})

test('errorsReducer returns correct error state for SET_CLIENTS with current error state', () => {
    const action = {
        type: 'SET_CLIENTS',
        errors: 'clients'
    }

    const newState = 'clients' 

    const result = errorsReducer(currentState, action)

    expect(result).toEqual(newState)
})


test('errorsReducer returns correct error state for SET_PROFILE', () => {
    const action = {
        type: 'SET_PROFILE',
        errors: 'profile'
    }

    const newState = 'profile' 

    const result = errorsReducer(undefined, action)

    expect(result).toEqual(newState)
})

test('errorsReducer returns correct error state for SET_PROFILE with current error state', () => {
    const action = {
        type: 'SET_PROFILE',
        errors: 'profile'
    }

    const newState = 'profile' 

    const result = errorsReducer(currentState, action)

    expect(result).toEqual(newState)
})