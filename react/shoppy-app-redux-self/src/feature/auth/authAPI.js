import { login, logout } from "./authSlice.js";
import { validateFormCheck2 } from "../../utils/validate.js";

export const handleLogout = () => async(dispatch) => {
    dispatch(logout());
}

export const getLogin = (formData, param) => async(dispatch) => {
    if(validateFormCheck2(param)) {
        if("test" === formData.id && "1234" === formData.pwd) {
            dispatch(login({"userId":formData.id}));
            return true;
        }
        return false;
    }

}