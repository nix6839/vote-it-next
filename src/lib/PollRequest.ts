import axios from 'axios';
import { PollPaginationData } from '../types';

const request = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? 'https://voteit-api.washnix.com:3000'
      : 'http://localhost:3000/api',
  timeout: 5000,
});

export async function getPagination(
  cursor?: number,
  query?: string,
): Promise<PollPaginationData> {
  const res = await request.get('/polls', {
    params: { limit: 12, cursor, query },
  });
  return res.data;
}
