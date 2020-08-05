import axios from 'axios';

export const setProfile = (profile) => ({
    type: 'SET_PROFILE',
    profile: profile
});

export const startSetProfile = (id) => {
    return (dispatch) => {
        axios.get('/api/clients/'+id)
            .then(profile => dispatch(setProfile(profile.data)))
            .catch(err => console.log(err))
    }
}