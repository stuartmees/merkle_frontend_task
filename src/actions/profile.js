import axios from 'axios';

export const setProfile = (profile) => ({
    type: 'SET_PROFILE',
    profile: profile,
    errors: ''
});

export const setProfileError = () => ({
    type: 'SET_PROFILE',
    profile: '',
    errors: 'profile'
});

export const startSetProfile = (id) => {
    return (dispatch) => {
        axios.get('/api/clients/'+id)
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