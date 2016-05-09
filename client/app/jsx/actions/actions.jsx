import axios from 'axios';

export const FETCH_PROMPTS = 'FETCH_PROMPTS';
export const SUBMIT_ATTEMPT = 'SUBMIT_ATTEMPT';
export const CREATE_DIFFICULTY = 'CREATE_DIFFICULTY';
export const SAVE_USER = 'SAVE_USER';

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
  }
}
export function createDifficulty(difficulty) {
  return {
    type: CREATE_DIFFICULTY,
    difficulty: difficulty
  }
}
export function saveUser(profile) {
  const request = axios.post('/api/saveUser', profile);
  return {
    type: SAVE_USER,
    payload: request
  }
}
