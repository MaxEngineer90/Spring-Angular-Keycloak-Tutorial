export interface UserProfile {
  sub: string;
  email: string;
  given_name: string;
  family_name: string;
  roles: string[];
  token: string;
  anonymous?: boolean;
}

export const ANONYMOUS_USER: UserProfile = {
  sub: '',
  email: 'nomail',
  given_name: '',
  family_name: '',
  roles: [],
  token: '',
  anonymous: true,
};
