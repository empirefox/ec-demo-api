import { argv } from 'yargs';

interface Args {
  port?: number;
  url?: string;
  origin?: string;
}

const { port = 9999, url = 'http://127.0.0.1:9999', origin = 'http://127.0.0.1:3000'} = <Args>argv;

export const config = { port, url, origin };
