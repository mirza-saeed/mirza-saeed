import { isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  HostListener,
  inject,
  OnInit,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { NavRail } from './components/nav-rail/nav-rail';
import { Hero } from './components/hero/hero';
import { BentoGrid } from './components/bento-grid/bento-grid';
import { Experience } from './components/experience/experience';
import { TechStack } from './components/tech-stack/tech-stack';
import { Footer } from './components/footer/footer';

export interface NavLinkItem {
  id: string;
  label: string;
  icon: string;
  target: string;
  hasArrow: boolean;
}

@Component({
  selector: 'app-root',
  imports: [
    NavRail,
    Hero,
    BentoGrid,
    Experience,
    TechStack,
    Footer,
    MatSidenavModule,
    MatIconModule,
    MatRippleModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly destroyRef = inject(DestroyRef);
  private readonly el = inject(ElementRef);

  readonly activeSection = signal<string>('home');
  readonly isDark = signal<boolean>(false);
  readonly isDarkMode = this.isDark;
  readonly isDrawerOpen = signal<boolean>(false);
  readonly animationsPaused = signal<boolean>(false);

  // Exact personal portfolio navigation links specified by user
  readonly navLinks: NavLinkItem[] = [
    { id: 'home', label: 'Home', icon: 'account_circle', target: '#hero', hasArrow: false },
    { id: 'highlights', label: 'Overview & Highlights', icon: 'apps', target: '#highlights', hasArrow: false },
    { id: 'experience', label: 'Experience', icon: 'work_outline', target: '#experience', hasArrow: true },
    { id: 'projects', label: 'Projects & Tooling', icon: 'widgets', target: '#projects', hasArrow: true },
    { id: 'skills', label: 'Technical Stack', icon: 'code', target: '#skills', hasArrow: true },
    { id: 'architecture', label: 'Architecture & Domains', icon: 'layers', target: '#architecture', hasArrow: true },
    { id: 'contact', label: 'Contact', icon: 'alternate_email', target: '#contact', hasArrow: false },
  ];

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId) && typeof IntersectionObserver !== 'undefined') {
      this.setupIntersectionObserver();
    }
  }

  toggleTheme(): void {
    this.isDark.update((v) => !v);
    if (isPlatformBrowser(this.platformId)) {
      if (this.isDark()) {
        document.documentElement.setAttribute('data-theme', 'dark');
      } else {
        document.documentElement.removeAttribute('data-theme');
      }
    }
  }

  toggleAnimations(): void {
    this.animationsPaused.update((v) => !v);
    if (isPlatformBrowser(this.platformId)) {
      if (this.animationsPaused()) {
        document.documentElement.setAttribute('data-animations-paused', 'true');
      } else {
        document.documentElement.removeAttribute('data-animations-paused');
      }
    }
  }

  @HostListener('window:keydown.escape')
  onEscape(): void {
    if (this.isDrawerOpen()) {
      this.closeDrawer();
    }
  }

  openDrawer(): void {
    this.isDrawerOpen.set(true);
  }

  closeDrawer(): void {
    this.isDrawerOpen.set(false);
  }

  toggleDrawer(): void {
    this.isDrawerOpen.update((v) => !v);
  }

  navigateTo(id: string, drawer?: any, event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    this.activeSection.set(id);
    if (drawer) {
      drawer.close();
      this.isDrawerOpen.set(false);
    } else {
      this.closeDrawer();
    }

    if (isPlatformBrowser(this.platformId)) {
      let targetElementId = id;
      if (id === 'home' || id === 'hero') {
        targetElementId = 'home';
      } else if (id === 'highlights') {
        targetElementId = document.getElementById('highlights') ? 'highlights' : 'projects';
      } else if (id === 'skills') {
        targetElementId = document.getElementById('skills') ? 'skills' : 'stack';
      }

      const targetElement = document.getElementById(targetElementId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  onSectionSelected(sectionId: string): void {
    this.navigateTo(sectionId);
  }

  private setupIntersectionObserver(): void {
    const sections = ['home', 'highlights', 'experience', 'projects', 'skills', 'architecture', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.activeSection.set(entry.target.id);
            break;
          }
        }
      },
      {
        rootMargin: '-30% 0px -60% 0px',
        threshold: 0,
      }
    );

    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    }

    this.destroyRef.onDestroy(() => {
      observer.disconnect();
    });
  }
}
