import { Component } from '@angular/core';

type Gender = 'Male' | 'Female' | 'Prefer not to say';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  genders: Gender[] = ['Male', 'Female', 'Prefer not to say'];
  gender: Gender = 'Male';
}
