import { Component } from '@angular/core';
import { Portfolio } from '../../services/portfolio';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
profile:any;
projects: {  title: string; description: string;technology:string; link?: string}[] = [];

  constructor(private portfolio: Portfolio) {
    this.profile = this.portfolio;
    this.projects = this.portfolio.getProjects();

  }
}
