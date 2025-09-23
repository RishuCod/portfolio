import { Component } from '@angular/core';
import { Portfolio } from '../../services/portfolio';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  profile:any;
  constructor(private portfolio: Portfolio) {
    this.profile = this.portfolio.getProfile();
  }

}
