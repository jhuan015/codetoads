import axios from 'axios';

export const FETCH_PROMPT = 'FETCH_PROMPT';

export function fetchPrompt() {
  const request = axios.get('/api/grabPrompt');

  return {
    type: FETCH_PROMPT,
    payload: request
  };
}
