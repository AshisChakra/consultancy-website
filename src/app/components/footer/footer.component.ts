import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}
  
  // Method to navigate and ensure scroll to top
  navigateTo(path: string) {
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