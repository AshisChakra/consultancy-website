import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services = [
    {
      id: 1,
      title: 'Financial Planning',
      icon: 'fa-coins',
      description: 'Comprehensive financial planning tailored to your unique situation and goals, helping you build a secure financial future.',
      details: [
        'In-depth financial assessment',
        'Personalized budget creation',
        'Long-term saving strategies',
        'Retirement planning',
        'Debt management solutions'
      ]
    },
    {
      id: 2,
      title: 'Investment Advice',
      icon: 'fa-chart-line',
      description: 'Clear, straightforward investment guidance designed for beginners and those looking to optimize their existing portfolios.',
      details: [
        'Risk assessment and profile creation',
        'Basic investment education',
        'Portfolio diversification strategies',
        'Regular portfolio reviews',
        'Guidance on tax-efficient investing'
      ]
    },
    {
      id: 3,
      title: 'Depression Support',
      icon: 'fa-heart',
      description: 'Practical strategies and supportive guidance to help you navigate through depression and build resilience.',
      details: [
        'Identifying depression triggers',
        'Creating daily coping routines',
        'Building a support network',
        'Developing self-care practices',
        'Setting achievable goals for recovery'
      ]
    },
    {
      id: 4,
      title: 'Stress Management',
      icon: 'fa-spa',
      description: 'Effective techniques to reduce stress, improve your daily functioning, and enhance your overall quality of life.',
      details: [
        'Stress identification and assessment',
        'Mindfulness and meditation techniques',
        'Time management strategies',
        'Healthy boundary setting',
        'Work-life balance coaching'
      ]
    },
    {
      id: 5,
      title: 'Budgeting & Debt Management',
      icon: 'fa-clipboard-check',
      description: 'Personalized budgeting systems and debt reduction strategies that actually work with your lifestyle.',
      details: [
        'Creating practical budgets',
        'Debt consolidation planning',
        'Emergency fund building',
        'Spending habit analysis',
        'Financial goal setting'
      ]
    },
    {
      id: 6,
      title: 'Group Workshops',
      icon: 'fa-users',
      description: 'Interactive workshops on financial literacy and mental health topics for small groups and organizations.',
      details: [
        'Financial wellness programs',
        'Stress management in the workplace',
        'Mental health awareness sessions',
        'Team-building exercises',
        'Customized workshop development'
      ]
    }
  ];
} 