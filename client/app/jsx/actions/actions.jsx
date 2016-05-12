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
export const CREATE_GAME = 'CREATE_GAME';
export const GET_USER_INFO = 'GET_USER_INFO';

export function fetchPrompts(difficulty, numPrompt) {
  const request = axios.post('/api/makeGame', { "difficulty": 'easy', "numPrompt": 2});
  return {
    type: FETCH_PROMPTS,
    payload: request
  };
}
export function submitAttempt(ans) {
  const request =  axios.post('/api/submitAttempt', ans)
  return {
    type: SUBMIT_ATTEMPT,
    payload: request
  };
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
export function createGame(roomname, password, difficulty, numPrompts) {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token');
  const request = axios.post('/api/createGame', {'roomname': roomname, 'password': password, 'difficulty': difficulty, 'user_id':JSON.parse(localStorage.profile).user_id, 'numPrompts': 2});
  return {
    type: CREATE_GAME,
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
