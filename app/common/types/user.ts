export interface User {
  id: number;
  email: string;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface UserSocialAccount {
  id: number;
  userId: number;
  provider: string;
  providerUserId: string;
  createdAt: string;
  updatedAt: string;
}
