import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-showcase-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './showcase-card.html',
  styleUrl: './showcase-card.scss',
})
export class ShowcaseCard {
  readonly badge = input<string>('');
  readonly headline = input.required<string>();
  readonly description = input<string>('');
  readonly mediaBackground = input<string>('var(--md-sys-color-surface-container-high)');
  readonly interactive = input<boolean>(true);
}
