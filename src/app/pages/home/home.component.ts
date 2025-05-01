import { Component, AfterViewInit, OnDestroy, ElementRef, ViewChild, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser, DOCUMENT } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  // Stats counters
  stats = [
    { value: 0, target: 120, label: 'Happy Clients', icon: 'fa-users', suffix: '+' },
    { value: 0, target: 5, label: 'Years Experience', icon: 'fa-calendar-alt', suffix: '+' },
    { value: 0, target: 98, label: 'Success Rate', icon: 'fa-chart-line', suffix: '%' },
    { value: 0, target: 15, label: 'Financial Plans', icon: 'fa-file-invoice-dollar', suffix: 'K+' }
  ];
  
  // Real profile image path
  profileImage = '/assets/images/ashis-profile.jpg';
  
  // Testimonials data for the slider
  testimonials = [
    {
      id: 1,
      text: 'Ashis helped me create a budget that actually works for my lifestyle. For the first time, I feel in control of my finances.',
      author: 'Rahul S.',
      role: 'Young Professional',
      image: '/assets/images/testimonial-1.jpg'
    },
    {
      id: 2,
      text: 'The stress management techniques Ashis taught me have been life-changing. I can now handle work pressure much better.',
      author: 'Priya M.',
      role: 'IT Project Manager',
      image: '/assets/images/testimonial-2.jpg'
    },
    {
      id: 3,
      text: 'When my depression was at its worst, Ashis provided practical guidance that helped me see a path forward.',
      author: 'Aditya K.',
      role: 'Small Business Owner',
      image: '/assets/images/testimonial-3.jpg'
    }
  ];
  
  // Features 
  features = [
    {
      icon: 'fa-user-shield',
      title: 'Personalized Approach',
      description: 'Customized solutions tailored to your unique financial situation and emotional well-being needs.'
    },
    {
      icon: 'fa-hand-holding-heart',
      title: 'Compassionate Support',
      description: 'Empathetic guidance that addresses both financial concerns and mental health challenges.'
    },
    {
      icon: 'fa-laptop-house',
      title: 'Remote Sessions',
      description: 'Convenient online consultations available for clients who prefer virtual meetings.'
    },
    {
      icon: 'fa-certificate',
      title: 'Professional Expertise',
      description: 'Years of experience helping clients achieve financial stability and emotional wellness.'
    }
  ];
  
  currentTestimonialIndex = 0;
  countersStarted = false;
  counterInterval: any;
  animationObserver: IntersectionObserver | null = null;
  isBrowser: boolean;
  
  constructor(
    private elementRef: ElementRef,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
  
  ngAfterViewInit() {
    if (this.isBrowser) {
      this.setupScrollAnimation();
      this.startAutoSlideTestimonials();
    }
  }
  
  ngOnDestroy() {
    if (this.counterInterval) {
      clearInterval(this.counterInterval);
    }
    
    if (this.animationObserver) {
      this.animationObserver.disconnect();
    }
  }
  
  scrollToElement(elementId: string): void {
    if (!this.isBrowser) return;
    
    const element = this.document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  setupScrollAnimation() {
    if (!this.isBrowser) return;
    
    // Setup IntersectionObserver to detect when elements enter viewport
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    this.animationObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-visible');
          
          // Start counter animation if the stats section is visible
          if (entry.target.classList.contains('stats-section') && !this.countersStarted) {
            this.startCounterAnimation();
          }
          
          // Only observe once
          this.animationObserver?.unobserve(entry.target);
        }
      });
    }, options);
    
    // Get all elements with animation classes
    const animatedElements = this.elementRef.nativeElement.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el: Element) => {
      this.animationObserver?.observe(el);
    });
  }
  
  startCounterAnimation() {
    if (!this.isBrowser) return;
    
    this.countersStarted = true;
    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;
    
    this.counterInterval = setInterval(() => {
      let finished = true;
      
      this.stats.forEach(stat => {
        if (stat.value < stat.target) {
          const increment = Math.ceil(stat.target / steps);
          stat.value = Math.min(stat.value + increment, stat.target);
          finished = false;
        }
      });
      
      if (finished) {
        clearInterval(this.counterInterval);
      }
    }, interval);
  }
  
  nextTestimonial() {
    this.currentTestimonialIndex = (this.currentTestimonialIndex + 1) % this.testimonials.length;
  }
  
  prevTestimonial() {
    this.currentTestimonialIndex = (this.currentTestimonialIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }
  
  startAutoSlideTestimonials() {
    if (!this.isBrowser) return;
    
    setInterval(() => {
      this.nextTestimonial();
    }, 5000); // Change testimonial every 5 seconds
  }
  
  // Detect scroll for parallax effects
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (!this.isBrowser) return;
    
    const scrollPosition = window.scrollY;
    
    // Add parallax effect to hero section
    const heroElement = this.document.querySelector('.hero') as HTMLElement;
    if (heroElement) {
      heroElement.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    }
  }
} 