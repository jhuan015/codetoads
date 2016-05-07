import { LOCK_SUCCESS, LOGOUT_SUCCESS } from '../actions/authActions';

// Setting authentication based on if token exists in localStorage
export default function(state = {
  isFetching: false,
  isAuthenticated: localStorage.getItem('id_token') ? true : false,
}, action) {
  switch (action.type) {
  case LOCK_SUCCESS:
    // When lock succeeds in login pass in true
    return Object.assign({}, state, {
      isFetching: false,
      isAuthenticated: true,
      errorMessage: '',
    });
  case LOGOUT_SUCCESS:
    // When lock fails to authenticate set to false
    return Object.assign({}, state, {
      isFetching: true,
      isAuthenticated: false,
      });
    default:
      return state;
    }
}
