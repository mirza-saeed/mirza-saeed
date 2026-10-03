import { ChangeDetectionStrategy, Component, input, model, output } from '@angular/core';

@Component({
  selector: 'app-segmented-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './segmented-group.html',
  styleUrl: './segmented-group.scss',
})
export class SegmentedGroup {
  readonly options = input<string[]>(['Frontend', 'Backend', 'FinTech']);
  readonly selected = model<string>('Frontend');
  readonly selectionChange = output<string>();

  select(option: string): void {
    this.selected.set(option);
    this.selectionChange.emit(option);
  }
}
