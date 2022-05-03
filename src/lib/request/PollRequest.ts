import request from '.';
import { PollPaginationData } from '../../types';

// Other functions will be added later
// eslint-disable-next-line import/prefer-default-export
export async function getPagination(
  cursor?: number,
  query?: string,
): Promise<PollPaginationData> {
  const res = await request.get('/polls', {
    params: { limit: 12, cursor, query },
  });
  return res.data;
}
