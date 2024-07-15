import axios from "axios";
import { loginStart, loginSuccess, loginFailure } from "./userRedux"

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    console.log("user is: ", user)
    try {
        const res = await axios.post('/api/v2/auth/login', user);
        dispatch(loginSuccess(res.data));
    } catch (error) {
        dispatch(loginFailure());
    }
}