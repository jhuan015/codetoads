import Auth0Lock from 'auth0-lock';
//Login Actions
export const SHOW_LOCK = 'SHOW_LOCK';
export const LOCK_SUCCESS = 'LOCK_SUCCESS';
export const LOCK_ERROR = 'LOCK_ERROR';

// Action creator for showing Lock
function showLock() {
  return {
    type: SHOW_LOCK,
  };
}

// Login Success return idToken and profile from Auth0
function lockSuccess(profile, token) {
  return {
    type: LOCK_SUCCESS,
    profile,
    token,
  };
}

// Login error
function lockError(err) {
  return {
    type: LOCK_ERROR,
    err,
  };
}

export function login() {
  const lock = new Auth0Lock(AUTH0.clientID, AUTH0.domain);
  return dispatch => {
    lock.show((err, profile, token) => {
      if (err) {
        dispatch(lockError(err));
        return;
      }
      // Set token and profile to local storage for further use
      localStorage.setItem('profile', JSON.stringify(profile));
      localStorage.setItem('id_token', token);
      dispatch(lockSuccess(profile, token));
    });
  };
}

// Logout Actions
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

function requestLogout() {
  return {
    type: LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true,
  };
}

function receiveLogout() {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false,
  };
}
// Logs User out and remove token from localStorage
export function logoutUser() {
  return dispatch => {
    dispatch(requestLogout());
    localStorage.removeItem('id_token');
    dispatch(receiveLogout());
  };
}
