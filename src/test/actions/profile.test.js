import { setProfile, setProfileError, startSetProfile } from '../../actions/profile'
import profile from '../data/profile'

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import axios from 'axios';
jest.mock('axios');

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

test('setProfile should setup set profile action object', () => {
    const action = setProfile(profile);
    expect(action).toEqual({
        type: 'SET_PROFILE',
        profile: profile,
        errors: ''
    });
})

test('setProfileError should setup set profile error action object', () => {
    const action = setProfileError();
    expect(action).toEqual({
        type: 'SET_PROFILE',
        profile: "",
        errors: 'profile'
    });
})

test('startSetProfile should successfully dipatch correct setProfile action', () => {
    const response = {
        data: profile
    }

    axios.get.mockResolvedValue(response)

    const profile = response.data

    const expectedActions = [setProfile(profile)]
    
    const store = mockStore({ profile: '' })

    store.dispatch(startSetProfile()).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
    })
})

test('startSetProfile should successfully dispatch setProfileError action', () => {
    const response = {}
    
    axios.get.mockRejectedValue(response)

    const expectedActions = [setProfileError()]
    
    const store = mockStore({ profile: [] })

    store.dispatch(startSetProfile()).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
    })
})


