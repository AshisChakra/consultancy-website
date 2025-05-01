import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  blogPosts = [
    {
      id: 1,
      title: '5 Simple Steps to Start Your Financial Journey',
      excerpt: 'Discover the essential steps to take control of your finances, even if you\'re just getting started with budgeting and saving.',
      image: '/assets/images/blog-finance.jpg',
      category: 'Financial Planning',
      date: 'April 25, 2025',
      author: 'Ashis Chakraborty'
    },
    {
      id: 2,
      title: 'Managing Stress in Your Daily Life',
      excerpt: 'Learn practical techniques to reduce stress and anxiety that you can incorporate into your everyday routine.',
      image: '/assets/images/blog-stress.jpg',
      category: 'Stress Management',
      date: 'April 18, 2025',
      author: 'Ashis Chakraborty'
    },
    {
      id: 3,
      title: 'Finding Hope When Dealing with Depression',
      excerpt: 'Strategies and insights for navigating through depression and building a foundation for emotional wellness.',
      image: '/assets/images/blog-depression.jpg',
      category: 'Depression Support',
      date: 'April 10, 2025',
      author: 'Ashis Chakraborty'
    },
    {
      id: 4,
      title: 'Beginners Guide to Investment Options',
      excerpt: 'A comprehensive overview of investment options available for beginners, with pros and cons of each.',
      image: '/assets/images/blog-investment.jpg',
      category: 'Investment Advice',
      date: 'April 3, 2025',
      author: 'Ashis Chakraborty'
    },
    {
      id: 5,
      title: 'How to Create a Budget That Actually Works',
      excerpt: 'Practical advice for creating a budget that you\'ll actually stick to, based on your lifestyle and goals.',
      image: '/assets/images/blog-budget.jpg',
      category: 'Financial Planning',
      date: 'March 27, 2025',
      author: 'Ashis Chakraborty'
    },
    {
      id: 6,
      title: 'Building Resilience During Difficult Times',
      excerpt: 'Learn how to develop emotional resilience to better handle life\'s challenges and setbacks.',
      image: '/assets/images/blog-resilience.jpg',
      category: 'Mental Health',
      date: 'March 20, 2025',
      author: 'Ashis Chakraborty'
    }
  ];

  categories = [
    'All Categories',
    'Financial Planning',
    'Investment Advice',
    'Depression Support',
    'Stress Management',
    'Mental Health'
  ];

  selectedCategory = 'All Categories';

  changeCategory(category: string) {
    this.selectedCategory = category;
  }

  get filteredPosts() {
    if (this.selectedCategory === 'All Categories') {
      return this.blogPosts;
    }
    return this.blogPosts.filter(post => post.category === this.selectedCategory);
  }
} 