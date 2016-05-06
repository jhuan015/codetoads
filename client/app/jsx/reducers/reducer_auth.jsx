import { LOCK_SUCCESS, LOGOUT_SUCCESS } from '../actions/Auth_Actions';

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

}
