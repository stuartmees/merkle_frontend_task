//Filters Reducer
const filtersReducerDefaultObject = {
    searchTerm: ''
}

const filtersReducer = (state = filtersReducerDefaultObject, action) => {
    switch(action.type) {
        case 'SET_CLIENT_FILTER':
            return {
                searchTerm: action.searchTerm
            };
        default:
            return state;
    };
}; 

export default filtersReducer;