export interface User {
  id: number;
  email: string;
  nickname: string;
}

export type UserSummary = Omit<User, 'id' | 'email'>;

export interface PollOption {
  id: number;
  content: string;
  votedCount: number;
}

export interface Poll {
  id: number;
  createdAt: string;
  expirationDate?: string | null;
  subject: string;
  isPlural: boolean;
  picture?: string | null;
  participatedCount: number;
  options: PollOption[];
  author: UserSummary;
}

export type PollSummary = Omit<Poll, 'isPlural' | 'options'>;

export interface PollPaginationData {
  polls: PollSummary[];
  nextCursor: Poll['id'];
}
