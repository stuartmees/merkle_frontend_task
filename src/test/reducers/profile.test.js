import profileReducer from '../../reducers/profile';
import profile from '../data/profile';


test('profileReducer should return default empty string', () => {
    const result = profileReducer(undefined, {type: '@@INIT'});

    expect(result).toEqual('');
})


test('profileReducer returns correct state for SET_PROFILE', () => {
    const action = {
        type: 'SET_PROFILE',
        profile: profile
    }

    const newState = profile

    const result = profileReducer(undefined, action)

    expect(result).toEqual(newState)
})

test('profileReducer returns correct state for SET_PROFILE even with current state', () => {
    const action = {
        type: 'SET_PROFILE',
        profile: profile
    }

    const currentState = {
        "id": "7",
        "name": "Trupe",
        "logo": "https://storage.googleapis.com/mock-logos/logo-7.png",
        "data": [
          {
            "date": "2020-07-12T00:00:00.000Z",
            "impressions": 99336,
            "clicks": 25865,
            "cost": 1690,
            "conversions": 118
          },
          {
            "date": "2020-07-13T00:00:00.000Z",
            "impressions": 167329,
            "clicks": 23663,
            "cost": 1110,
            "conversions": 135
          },
          {
            "date": "2020-07-14T00:00:00.000Z",
            "impressions": 94772,
            "clicks": 13864,
            "cost": 1747,
            "conversions": 136
          }
        ]
    }

    const newState = profile

    const result = profileReducer(currentState, action)

    expect(result).toEqual(newState)
})