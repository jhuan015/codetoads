import axios from 'axios';

export const FETCH_PROMPT = 'FETCH_PROMPT';

export function fetchPrompt() {
  const request = axios.post('/api/grabPrompt');
  // console.log(request)

  return {
    type: FETCH_PROMPT,
    payload: request
  };
}
