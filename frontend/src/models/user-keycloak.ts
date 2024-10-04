export interface UserKeycloak {
  id: string;
  email: string;
  name: string;
  anonymous: boolean;
  roles: string[];
  bearer: string;
}

export const ANONYMOUS_USER: UserKeycloak = {
  id: '',
  email: 'nomail',
  name: 'no user',
  anonymous: true,
  roles: [],
  bearer: '',
};
