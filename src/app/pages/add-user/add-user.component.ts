import { Component } from '@angular/core';
import { UpsertUserComponent } from '../../components/upsert-user/upsert-user.component';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [UpsertUserComponent],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss',
})
export class AddUserComponent {}
