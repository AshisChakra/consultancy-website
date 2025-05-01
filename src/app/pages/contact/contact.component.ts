import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;
  success = false;
  
  services = [
    'Financial Planning',
    'Investment Advice',
    'Depression Support',
    'Stress Management',
    'Budgeting & Debt Management',
    'Group Workshop',
    'Other'
  ];
  
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.pattern('^[0-9]{10}$')],
      service: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }
  
  get f() { 
    return this.contactForm.controls; 
  }
  
  onSubmit() {
    this.submitted = true;
    
    if (this.contactForm.invalid) {
      return;
    }
    
    // In a real app, you would send the form data to a server
    console.log('Form submitted with value:', this.contactForm.value);
    
    this.success = true;
    this.contactForm.reset();
    this.submitted = false;
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      this.success = false;
    }, 5000);
  }
} 