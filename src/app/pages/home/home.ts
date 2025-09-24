import { Component, AfterViewInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { Portfolio } from '../../services/portfolio';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements AfterViewInit {
profile:any;
projects: {  title: string; description: string;technology:string; link?: string}[] = [];

  @ViewChild('heroHeading') heroHeading!: ElementRef<HTMLElement>;
  @ViewChild('heroPara') heroPara!: ElementRef<HTMLElement>;

  constructor(private portfolio: Portfolio, private renderer: Renderer2) {
    this.profile = this.portfolio;
    this.projects = this.portfolio.getProjects();

  }

  ngAfterViewInit(): void {
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      return;
    }

    const headingEl = this.heroHeading?.nativeElement;
    const paraEl = this.heroPara?.nativeElement;

    if (!headingEl || !paraEl) {
      return;
    }

    const headingText = headingEl.getAttribute('data-text') || (headingEl.textContent ?? '').trim();
    const paraText = paraEl.getAttribute('data-text') || (paraEl.textContent ?? '').trim();

    headingEl.textContent = '';
    paraEl.textContent = '';

    this.typewrite(headingEl, headingText, { speed: 40, delay: 150, keepCaret: false })
      .then(() => this.typewrite(paraEl, paraText, { speed: 14, delay: 200, keepCaret: true }))
      .catch(() => {
        headingEl.textContent = headingText;
        paraEl.textContent = paraText;
      });
  }

  private typewrite(element: HTMLElement, text: string, options?: { speed?: number; delay?: number; keepCaret?: boolean; }): Promise<void> {
    const speed = options?.speed ?? 30;
    const delay = options?.delay ?? 200;
    const keepCaret = options?.keepCaret !== false;

    const caret = this.renderer.createElement('span');
    this.renderer.addClass(caret, 'caret');
    this.renderer.appendChild(element, caret);

    return new Promise<void>((resolve) => {
      let index = 0;
      const step = () => {
        if (index < text.length) {
          const char = text.charAt(index);
          caret.insertAdjacentText('beforebegin', char);
          index += 1;
          window.setTimeout(step, speed);
        } else {
          if (!keepCaret && caret.parentNode) {
            caret.parentNode.removeChild(caret);
          }
          resolve();
        }
      };
      window.setTimeout(step, delay);
    });
  }
}
