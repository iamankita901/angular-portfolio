import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  name = 'Ankita Gupta jwnkawndkjawnkjdnkwjdnkjankdawbd';
  imagePath: string ="images/profilepic.jpg";
  title = 'Full-stack Developer';
  tagline = 'Turning ideas into responsive and beautiful web applications.';

}
