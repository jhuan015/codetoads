import axios from 'axios';

export const FETCH_PROMPTS = 'FETCH_PROMPTS';
export const SUBMIT_ATTEMPT = 'SUBMIT_ATTEMPT';
export const CREATE_DIFFICULTY = 'CREATE_DIFFICULTY';
export const SAVE_USER = 'SAVE_USER';
export const NEXT_PROMPT = 'NEXT_PROMPT';
export const CHEAT = 'CHEAT';
export const SET_ROOM = 'SET_ROOM';
export const SET_JOIN = 'SET_JOIN';
export const JOIN_GAME = 'JOIN_GAME';
export const SET_CREATE = 'SET_CREATE'
export const SAVE_GAME = 'SAVE_GAME';
export const GET_USER_INFO = 'GET_USER_INFO';
export const CLOSE_ALERT = 'CLOSE_ALERT';
export const UPDATE_PROMPTS = 'UPDATE_PROMPTS';
export const START_GAME = 'START_GAME';
export const UPDATE_USERS = 'UPDATE_USERS';
export const INCREMENT_GAME = 'INCREMENT_GAME';
export const UPDATE_SOLO = 'UPDATE_SOLO';
export const CLOSE_FINISH = 'CLOSE_FINISH';
export const RESET_GAME = 'RESET_GAME';
export const RECONNECT = 'RECONNECT';

export function fetchPrompts(difficulty) {
  const request = axios.post('/api/makeGame', { "difficulty": difficulty, "numPrompt": 5});
  return {
    type: FETCH_PROMPTS,
    payload: request
  };
}
export function updateUsers(users) {
  return {
    type: UPDATE_USERS,
    users: users
  };
}
export function submitAttempt(ans) {
  const request =  axios.post('/api/submitAttempt', ans)
  return {
    type: SUBMIT_ATTEMPT,
    payload: request
  };
}
export function closeAlert(){
  return {
    type: CLOSE_ALERT
  }
}
export function createDifficulty(difficulty) {
  return {
    type: CREATE_DIFFICULTY,
    difficulty: difficulty
  };
}
export function saveUser(profile) {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token');
  const request = axios.post('/api/saveUser', profile);
  return {
    type: SAVE_USER,
    payload: request
  };
}
export function nextPrompt(index) {
  return {
    type: NEXT_PROMPT,
    index: index
  };
}
export function cheatMe() {
  return {
    type: CHEAT
  }
}
export function setRoom(name, password) {
  return {
    type: SET_ROOM,
    roomname: name,
    password: password
  }
}
export function setJoin() {
  return {
    type: SET_JOIN
  }
}
export function joinGame(roomname, password) {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token');
  const request = axios.post('/api/joinGame', {'roomname': roomname, 'password': password});
  return {
    type: JOIN_GAME,
    payload: request
  }
}
export function setCreate() {
  return {
    type: SET_CREATE
  }
}
export function saveGame(data) {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token');
  const request = axios.post('/api/saveGame', data);
return {
    type: SAVE_GAME,
    payload: request
  }
}
export function getUserInfo() {
  var user = {
    user_id: JSON.parse(localStorage.profile).user_id
  }
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token');
  const request = axios.post('/api/getUserInfo', user);
  return {
    type: GET_USER_INFO,
    payload: request
  }
}

export function updatePrompts(data) {
  return {
    type: UPDATE_PROMPTS,
    payload: data
  }
}
export function startGame(data) {
  data = {};
  return {
    type: START_GAME,
    payload: data
  }
}
export function incrementGames() {
  var user = JSON.parse(localStorage.profile).user_id;
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token');
  const request = axios.put('/api/incrementGames/' + user);
  return {
    type: INCREMENT_GAME,
    payload: request
  }
}
export function updateSoloStats(time) {
  //update time if faster (seconds);
  //update completed
  var data = {
    user_id: JSON.parse(localStorage.profile).user_id,
    time: time
  }
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token');
  const request = axios.post('/api/updateSoloStats', data);
  return {
    type: UPDATE_SOLO,
    payload: request
  }
}
export function closeAndFinish(){
  return {
    type: CLOSE_FINISH
  }
}
export function resetGame() {
  return {
    type: RESET_GAME
  }
}
export function reconnect(data) {
  return {
    type: RECONNECT,
    payload: data
  };
}
