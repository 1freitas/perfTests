export { get-200-status-test } from './dist/get-200-status-test.js';
export { get-400-status-test } from './dist/get-400-status-test.js';
export { post-file-test } from './dist/post-file-test.js';

export const options = {
  scenarios: {
    get-200: {
      exec: 'get-200-status-test',
      executor: 'constant-vus',
      vus: 5,
      duration: '10s'
    },
    get-400: {
      exec: 'get-400-status-test',
      executor: 'constant-vus',
      vus: 5,
      duration: '10s'
    },
    post: {
      exec: 'post-file-test',
      executor: 'constant-vus',
      vus: 5,
      duration: '10s'
    }
  }
};
