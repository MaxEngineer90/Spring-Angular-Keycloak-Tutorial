export interface UserKeycloak {
  id: string;
  email: string;
  name: string;
  anonymous: boolean;
  bearer: string;
}

export const ANONYMOUS_USER: UserKeycloak = {
  id: '',
  email: 'nomail',
  name: 'no user',
  anonymous: true,
  bearer: '',
};
