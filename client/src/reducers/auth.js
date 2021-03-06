import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,    
    USER_LOADED,    
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    GETALL_USER,
    DELETE_CUSTOMER
} from './../actions/types';
const InitialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    loading: true,
    users: [],
    user: null
}

const auth = (state = InitialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case USER_LOADED: 
        // console.log(action)
            return {
                 ...state,
                 isAuthenticated: true,
                 loading: false,
                 user: payload
            }
        case GETALL_USER:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                users: payload
            }
        case DELETE_CUSTOMER:
            return {
                ...state,
                isAuthenticated: true,
                loading:  false,
                users: state.users.filter(val => val._id !== payload)
            }         
        case REGISTER_SUCCESS:
            console.log(action)
            // localStorage.setItem('token', payload.token)
            return {
                ...state,
                // ...payload,
                isAuthenticated: false,
                loading: false
            }
        
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            } 
        case REGISTER_FAIL:
        case LOGIN_FAIL:    
        case LOGOUT:
            // console.log(action)
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false
            }    
        default:
            return state
            
    }
}

export default auth