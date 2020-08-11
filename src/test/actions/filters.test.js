import setFilter from '../../actions/filters'

test('setFilter should setup set client filter action object', () => {
    const action = setFilter('search term');
    expect(action).toEqual({
        type: 'SET_CLIENT_FILTER',
        searchTerm: 'search term',
        errors: ''
    });
})




