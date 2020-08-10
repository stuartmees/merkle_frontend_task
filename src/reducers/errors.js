const errorsReducer = (state = '', action) => {
    const { errors } = action;

        if (errors){
            return errors
        }

        return state;
}

export default errorsReducer