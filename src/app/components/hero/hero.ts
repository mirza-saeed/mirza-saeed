import { DecimalPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [DecimalPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  // Live reactive state for interactive Fintech Card
  readonly balance = signal<number>(142850.75);
  readonly isTransferring = signal<boolean>(false);
  readonly lastTransferStatus = signal<string>('Settled via Faster Payments UK');

  // Interactive state for Signal AST node
  readonly signalActive = signal<boolean>(true);
  readonly nodeCount = signal<number>(4);

  // Quick switcher
  readonly activeMode = signal<string>('Signals');

  triggerTransfer(): void {
    if (this.isTransferring()) return;
    this.isTransferring.set(true);
    this.lastTransferStatus.set('Validating Ledger Entry...');

    setTimeout(() => {
      this.balance.update((b) => b + 1250.0);
      this.lastTransferStatus.set('£1,250.00 Settled via Instant Webhook');
      this.isTransferring.set(false);
    }, 850);
  }

  toggleSignalNode(): void {
    this.signalActive.update((v) => !v);
  }

  scrollTo(sectionId: string): void {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
