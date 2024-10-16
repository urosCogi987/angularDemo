import { Component } from '@angular/core';
import { UpsertUserComponent } from '../../components/upsert-user/upsert-user.component';

@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [UpsertUserComponent],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.scss',
})
export class UpdateUserComponent {}
