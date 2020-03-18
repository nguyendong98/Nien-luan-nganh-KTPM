import axios from 'axios'
// import {setAlert} from './alert'
import {ROOM_LOADED, ROOM_ERROR} from './types'
export const getAllKindOfRoom =  () => async dispatch => {
    try {
        const res = await axios.get('/api/kindofrooms');
        dispatch({
            type: ROOM_LOADED,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: ROOM_ERROR,
            payload: error.data
        })
    }
    
}