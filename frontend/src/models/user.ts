export interface User {
  id: string;
  email: string;
  name: string;
  anonymous: boolean;
  bearer: string;
}

export const ANONYMOUS_USER: User = {
  id: '',
  email: 'nomail',
  name: 'no user',
  anonymous: true,
  bearer: '',
};
