import request from '.';
import { PollPaginationData } from '../../types';

export async function getPagination(
  cursor?: number,
  query?: string,
): Promise<PollPaginationData> {
  const res = await request.get('/polls', {
    params: { limit: 12, cursor, query },
  });
  return res.data;
}
