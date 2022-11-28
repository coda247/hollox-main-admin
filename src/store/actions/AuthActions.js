import {
    formatError,
    login,
    runLogoutTimer,
    saveTokenInLocalStorage,
    signUp,
} from '../../services/AuthService';

export const SIGNUP_CONFIRMED_ACTION = '[signup action] confirmed signup';
export const SIGNUP_FAILED_ACTION = '[signup action] failed signup';
export const LOGIN_CONFIRMED_ACTION = '[login action] confirmed login';
export const LOGIN_FAILED_ACTION = '[login action] failed login';
export const LOADING_TOGGLE_ACTION = '[Loading action] toggle loading';
export const LOGOUT_ACTION = '[Logout action] logout action';

export function signupAction(email, password, history) {
    return (dispatch) => {
        signUp(email, password)
        .then((response) => {
            saveTokenInLocalStorage(response.data);
            runLogoutTimer(
                dispatch,
                response.data.expiresIn * 1000,
                history,
            );
            dispatch(confirmedSignupAction(response.data));
            history.push('/');
        })
        .catch((error) => {
            if(error.response.data != undefined){
                const errorMessage = formatError(error.response.data);
                dispatch(signupFailedAction(errorMessage));
            }else{
                let ms = {
                    errorMessage: "Network or time out error!"
                }
                const errorMessage = formatError(ms);
                dispatch(signupFailedAction(errorMessage));
            }
            
        });
    };
}

export function logout(history) {
    localStorage.removeItem('userDetails');
    history.push('/login');
    return {
        type: LOGOUT_ACTION,
    };
}

export function loginAction(email, password, history) {
    return (dispatch) => {
        login(email, password)
            .then((response) => {
                let rs = {
                    displayName: response.data.data.user.username,
                    email: response.data.data.user.email,
                    expiresIn: "3600",
                    idToken:  response.data.data.token,
                    kind: response.data.data.user.email,
                    localId:response.data.data.user.email,
                    refreshToken: response.data.data.token,
                    registered: true,
                    meta: response.data.data
                }
                console.log(response);
                if(response.data.data.user.isAdmin){
                    saveTokenInLocalStorage(rs);
                    runLogoutTimer(
                        dispatch,
                        rs.expiresIn * 1000,
                        history,
                    );
                    dispatch(loginConfirmedAction(rs));
                    history.push('/dashboard');
                    //window.location.reload();
                }else{
                    let ms = {
                        errorMessage: "Access denied!"
                    }
                    const errorMessage = formatError(ms);
                    dispatch(loginFailedAction(errorMessage));
                }
           
                
				//history.pushState('/index');
                
            })
            .catch((error) => {
                //console.log(error);
                if(typeof error.response !== "undefined"){
                    const errorMessage = formatError(error.response.data);
                    dispatch(loginFailedAction(errorMessage));
                }else{
                    let ms = {
                        errorMessage: "Network or time out error!"
                    }
                    const errorMessage = formatError(ms);
                    dispatch(loginFailedAction(errorMessage));
                }
            });
    };
}

export function loginFailedAction(data) {
    return {
        type: LOGIN_FAILED_ACTION,
        payload: data,
    };
}

export function loginConfirmedAction(data) {
    return {
        type: LOGIN_CONFIRMED_ACTION,
        payload: data,
    };
}

export function confirmedSignupAction(payload) {
    return {
        type: SIGNUP_CONFIRMED_ACTION,
        payload,
    };
}

export function signupFailedAction(message) {
    return {
        type: SIGNUP_FAILED_ACTION,
        payload: message,
    };
}

export function loadingToggleAction(status) {
    return {
        type: LOADING_TOGGLE_ACTION,
        payload: status,
    };
}
