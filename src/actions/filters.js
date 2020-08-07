// set text filter
export default (searchTerm = '') => ({
    type: 'SET_CLIENT_FILTER',
    searchTerm: searchTerm
})