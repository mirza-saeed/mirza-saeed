import { ChangeDetectionStrategy, Component, model, output } from '@angular/core';

interface NavDestination {
  id: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-nav-rail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './nav-rail.html',
  styleUrl: './nav-rail.scss',
})
export class NavRail {
  readonly activeSection = model<string>('home');
  readonly isDark = model<boolean>(false);
  readonly sectionSelected = output<string>();
  readonly themeToggle = output<void>();

  readonly navItems: NavDestination[] = [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'experience', label: 'Experience', icon: 'business_center' },
    { id: 'projects', label: 'Projects', icon: 'widgets' },
    { id: 'architecture', label: 'Architecture', icon: 'layers' },
    { id: 'stack', label: 'Stack', icon: 'code' },
    { id: 'contact', label: 'Contact', icon: 'alternate_email' },
  ];

  selectSection(id: string): void {
    this.activeSection.set(id);
    this.sectionSelected.emit(id);

    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  toggleTheme(): void {
    this.isDark.update((val) => !val);
    this.themeToggle.emit();
  }
}
