import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-expressive-waveform',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './expressive-waveform.html',
  styleUrl: './expressive-waveform.scss',
})
export class ExpressiveWaveform {
  readonly progress = input<number>(70); // 0 to 100
  readonly label = input<string>('Streaming Verification');

  protected readonly dashOffset = computed(() => {
    const p = Math.max(0, Math.min(100, this.progress()));
    // Total path length is roughly 160
    return 160 - (p / 100) * 160;
  });
}
