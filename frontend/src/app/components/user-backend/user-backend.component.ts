import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { UserBackendService } from '../../../services/greeting/user-backend.service';

@Component({
  selector: 'app-user-backend',
  standalone: true,
  imports: [],
  templateUrl: './user-backend.component.html',
  styleUrl: './user-backend.component.scss',
})
export class UserBackendComponent {
  #userService = inject(UserBackendService);
  userDto = toSignal(this.#userService.getUser());
}
