import { sleep} from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
export { get200StatusTest } from './get200StatusTest.ts';
export { get400StatusTest } from './post400StatusTest.ts';
export { postFileTest } from './postFileTest.ts';

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

export function handleSummary(data) {
  return {
    "summary.html": htmlReport(data),
  };
}
