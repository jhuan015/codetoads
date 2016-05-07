import axios from 'axios';

export const FETCH_PROMPT = 'FETCH_PROMPT';
export const SUBMIT_ATTEMPT = 'SUBMIT_ATTEMPT';
export const CREATE_DIFFICULTY = 'CREATE_DIFFICULTY';

export function fetchPrompt() {
  const request = axios.post('/api/grabPrompt');
  // console.log(request)

  return {
    type: FETCH_PROMPT,
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
    type:CREATE_DIFFICULTY,
    difficulty:difficulty
  }
}

