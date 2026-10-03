import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  readonly currentYear = new Date().getFullYear();
  readonly copied = signal<boolean>(false);

  copyContact(): void {
    navigator.clipboard?.writeText('+923487778929');
    this.copied.set(true);
    setTimeout(() => this.copied.set(false), 2000);
  }
}
