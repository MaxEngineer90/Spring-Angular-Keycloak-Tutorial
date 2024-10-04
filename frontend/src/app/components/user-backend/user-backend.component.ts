import { Component, inject } from '@angular/core';
import { UserBackendService } from '../../../services/user/user-backend.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { RoleComponent } from '../role/role.component';

@Component({
  selector: 'app-user-backend',
  standalone: true,
  imports: [RoleComponent],
  templateUrl: './user-backend.component.html',
  styleUrl: './user-backend.component.scss',
})
export class UserBackendComponent {
  #userService = inject(UserBackendService);
  userDto = toSignal(this.#userService.getUser());
}
