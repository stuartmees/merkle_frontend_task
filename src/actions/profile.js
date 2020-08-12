import axios from 'axios';

// set the client profile object to state
export const setProfile = (profile) => ({
    type: 'SET_PROFILE',
    profile: profile,
    errors: ''
});

// set the client profile error to state if error after request
export const setProfileError = () => ({
    type: 'SET_PROFILE',
    profile: '',
    errors: 'profile'
});

// get the client profile object from the API
export const startSetProfile = (id) => {
    return (dispatch) => {
        return axios.get('/api/clients/'+id)
            .then(profile => {
                dispatch(setProfile(profile.data))
            })
            .catch(err => {
                console.log('Error in recieving Profile'+id)
                console.log(err)
                dispatch(setProfileError())
            })
    }
}