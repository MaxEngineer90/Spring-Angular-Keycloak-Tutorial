export interface UserProfile {
  sub: string;
  email: string;
  given_name: string;
  family_name: string;
  roles: string[];
  token: string;
}
