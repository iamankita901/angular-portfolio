import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name= "Ankita Gupta"
  imagePath: string="images/profilepic.jpg"
  email="iamankitagupta901@gmail.com"
  phone="9832154347"
  location="Kolkata, India"
  bio="A passionate fullstack developer with a love for clean design, and well-structured code."
  skills = ["Angular", "HTML", "Python", "Java"]
  socialLinks = [
    {platform: "LinkedIn", url: "https://www.linkedin.com/in/ankita-gupta-457481309/"},
    {platform: "Instagram", url: "https://www.instagram.com/is_this_ankita/"}
  ]    
}