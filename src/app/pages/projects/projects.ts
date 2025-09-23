import { Component } from '@angular/core';
import { Portfolio } from '../../services/portfolio';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {
  projects: { title: string; description: string; link?: string }[] = [];

  constructor(private portfolio: Portfolio) {
    this.projects = this.portfolio.getProjects();
  }
}
