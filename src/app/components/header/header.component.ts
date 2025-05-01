import { Component, Inject, HostListener } from '@angular/core';
import { RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isMenuOpen = false;
  isScrolled = false;
  
  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    // Subscribe to router events to ensure scroll to top
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      if (isPlatformBrowser(this.platformId)) {
        // Execute in the next tick to ensure DOM is updated
        setTimeout(() => {
          window.scrollTo(0, 0);
          // Force scroll to top
          this.document.documentElement.scrollTop = 0;
          this.document.body.scrollTop = 0;
        }, 0);
      }
    });
  }
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.isScrolled = window.scrollY > 30;
    }
  }
  
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  
  // Method to navigate and ensure scroll to top
  navigateTo(path: string) {
    this.isMenuOpen = false;
    this.router.navigateByUrl(path).then(() => {
      if (isPlatformBrowser(this.platformId)) {
        // Execute in the next tick to ensure DOM is updated
        setTimeout(() => {
          window.scrollTo(0, 0);
          // Force scroll to top using multiple approaches
          this.document.documentElement.scrollTop = 0;
          this.document.body.scrollTop = 0;
        }, 0);
      }
    });
  }
} 