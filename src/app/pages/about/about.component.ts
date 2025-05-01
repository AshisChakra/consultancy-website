import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  // Skills data
  skills = [
    {
      category: 'Financial Planning',
      level: 90
    },
    {
      category: 'Investment Advice',
      level: 85
    },
    {
      category: 'Depression Support',
      level: 80
    },
    {
      category: 'Stress Management',
      level: 90
    },
    {
      category: 'Client Communication',
      level: 95
    }
  ];
  
  // Real photo path
  profileImage = '/assets/images/ashis-profile.jpg';
  
  // Stats
  stats = [
    {
      value: '5+',
      label: 'Years Experience'
    },
    {
      value: '120+',
      label: 'Happy Clients'
    },
    {
      value: '98%',
      label: 'Success Rate'
    }
  ];
} 