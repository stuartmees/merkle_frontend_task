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
                console.log('in startSetProf')
                dispatch(setProfile(profile.data))
            })
            .catch(err => {
                console.log('in startSetProf error')
                console.log(err)
                dispatch(setProfileError())
            })
    }
}