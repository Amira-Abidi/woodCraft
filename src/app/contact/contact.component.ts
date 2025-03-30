import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  email: string = '';
  msg: string = '';
  isLoading = false;

  constructor(private emailService: EmailService, private router: Router) {}

  sendMessage(){
    const msgDetails = {
      user: this.email,
      msg: this.msg,
    };

    console.log("msgDetails : ", msgDetails);
    
    this.isLoading = true;
  
    this.emailService.contactUs(msgDetails).subscribe(
      response => {
        console.log('Email sent successfully:', response);
        this.isLoading = false;
        this.email = '';
        this.msg = '';
        this.router.navigate(['/thankYou']);
        window.location.reload()
      },
      error => {
        console.error('Error sending email:', error);
        this.isLoading = false;
      }
    );
  }

}
