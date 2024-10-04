import { Component, input } from '@angular/core';

@Component({
  selector: 'app-role',
  standalone: true,
  imports: [],
  templateUrl: './role.component.html',
  styleUrl: './role.component.scss',
})
export class RoleComponent {
  roles = input.required<string[] | undefined>();
}
