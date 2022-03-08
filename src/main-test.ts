export { get200StatusTest } from './get-200-status-test.ts';
export { get400StatusTest } from './post-400-status-test.ts';
export { postFileTest } from './post-file-test.ts';

export default () => {
  sleep(1);
}
export const options = {
  scenarios: {
    get200: {
      exec: 'get200StatusTest',
      executor: 'constant-vus',
      vus: 15,
      duration: '40s'
    },
    get400: {
      exec: 'get400StatusTest',
      executor: 'constant-vus',
      vus: 5,
      duration: '80s'
    },
    post: {
      exec: 'postFileTest',
      executor: 'constant-vus',
      vus: 25,
      duration: '1m'
    }
  }

};
