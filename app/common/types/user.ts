export interface Profile {
  profileId: number;
  email: string;
  name?: string | null;
}

export interface UserSocialAccount {
  profileId: number;
  userId: number;
  provider: string;
  providerUserId: string;
}
