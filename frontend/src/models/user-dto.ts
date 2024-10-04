import { AddressDTO } from './address-dto';

export interface UserDto {
  identifier: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  roles: string[];
  addressDTO: AddressDTO;
}
