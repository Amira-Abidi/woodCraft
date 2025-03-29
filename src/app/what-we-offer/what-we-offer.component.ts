import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { trigger, style, transition, animate, state } from '@angular/animations';
@Component({
  selector: 'app-what-we-offer',
  templateUrl: './what-we-offer.component.html',
  styleUrls: ['./what-we-offer.component.css'],
  animations: [
    trigger('fadeInUp', [
      state('hidden', style({ opacity: 0, transform: 'translateY(20px)' })),
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('hidden => visible', animate('1s ease-out'))
    ])
  ]
})
export class WhatWeOfferComponent implements OnInit {
    isVisible = 'hidden';
  
    constructor(private el: ElementRef, private renderer: Renderer2) {}
  
    ngOnInit(): void {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.isVisible = 'visible';
          }
        });
      }, { threshold: 0.3 });
  
      observer.observe(this.el.nativeElement);
    }
  
}
