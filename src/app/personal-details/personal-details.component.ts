import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrl: './personal-details.component.css'
})
export class PersonalDetailsComponent {
  bio = 'Passionate web developer building responsive web apps using Angular and modern frontend tools.';
  age = 20;
  email = 'abc@gmail.com';
  phone = '+123 456 7890';
  location = 'Kolkata, India';
  skills = ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'Python'];

}
