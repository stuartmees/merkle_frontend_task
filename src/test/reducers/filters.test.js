import filtersReducer from '../../reducers/filters';
import { searchTerm } from '../data/clients';


test('filtersReducer should return default empty string searchTerm', () => {
    const result = filtersReducer(undefined, {type: '@@INIT'});

    expect(result).toEqual({searchTerm: ''});
})

test('filtersReducer returns correct state for SET_CLIENT_FILTER', () => {
    const action = {
        type: 'SET_CLIENT_FILTER',
        searchTerm: searchTerm
    }

    const newState = { searchTerm: searchTerm }

    const result = filtersReducer(undefined, action)

    expect(result).toEqual(newState)
})

test('filtersReducer returns correct state for SET_CLIENTS even with current state', () => {
    const action = {
        type: 'SET_CLIENT_FILTER',
        searchTerm: searchTerm
    }

    const currentState = 'prev search term'

    const newState = { searchTerm: searchTerm }

    const result = filtersReducer(currentState, action)

    expect(result).toEqual(newState)
})