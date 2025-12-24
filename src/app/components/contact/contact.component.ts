import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  submitted = false;

  onSubmit(): void {
    this.submitted = true;
    // Ici vous pouvez ajouter la logique pour envoyer le formulaire
    console.log('Formulaire soumis:', this.contactForm);
    
    // Réinitialiser le formulaire après soumission
    setTimeout(() => {
      this.contactForm = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
      this.submitted = false;
      alert('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.');
    }, 100);
  }
}

