import { Component } from '@angular/core';
import { UserUpsertComponent } from '../user-upsert/user-upsert.component';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [UserUpsertComponent],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss',
})
export class AddUserComponent {}
