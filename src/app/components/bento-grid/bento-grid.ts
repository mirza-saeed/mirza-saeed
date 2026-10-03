import { DecimalPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ShowcaseCard } from '../shared/showcase-card/showcase-card';
import { SegmentedGroup } from '../shared/segmented-group/segmented-group';
import { ExpressiveWaveform } from '../shared/expressive-waveform/expressive-waveform';

interface AmlRecord {
  entity: string;
  type: string;
  risk: 'Low' | 'Medium' | 'High';
  status: 'Clear' | 'Flagged' | 'PEP Watch';
}

@Component({
  selector: 'app-bento-grid',
  imports: [ShowcaseCard, SegmentedGroup, ExpressiveWaveform, FormsModule, DecimalPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './bento-grid.html',
  styleUrl: './bento-grid.scss',
})
export class BentoGrid {
  // --- Card 1: Treasury ERP State ---
  readonly accounts = signal([
    { name: 'UK Clearing Ops', balance: 3840250.0, currency: 'GBP', status: 'Reconciled' },
    { name: 'EUR Settlement Pool', balance: 1920110.4, currency: 'EUR', status: 'Streaming' },
    { name: 'USD Treasury Reserve', balance: 5410980.25, currency: 'USD', status: 'Audited' },
  ]);
  readonly selectedAccountIndex = signal<number>(0);
  readonly selectedAccount = computed(() => this.accounts()[this.selectedAccountIndex()]);

  // --- Card 2: NestView Node Explorer State ---
  readonly nodeExpanded = signal<boolean>(true);
  readonly activeSchemaFormat = signal<'TypeScript' | 'JSON' | 'C# DTO'>('TypeScript');
  readonly schemas = {
    TypeScript: `interface AccountLedger {\n  id: string;\n  balance: number;\n  currency: 'GBP' | 'USD';\n  verified: boolean;\n}`,
    JSON: `{\n  "accountId": "ACC-9921",\n  "amount": 25000.00,\n  "currency": "GBP",\n  "status": "SETTLED"\n}`,
    'C# DTO': `public record LedgerDto(\n  Guid AccountId,\n  decimal Balance,\n  string Currency,\n  bool IsAudited\n);`,
  };

  // --- Card 3: AML Watcher Screening Simulator ---
  readonly amlSearchQuery = signal<string>('');
  readonly rawAmlRecords: AmlRecord[] = [
    { entity: 'Apex Global Financials Ltd', type: 'Corporate KYB', risk: 'Low', status: 'Clear' },
    { entity: 'Vanguard Transatlantic LLC', type: 'Sanctions Check', risk: 'High', status: 'Flagged' },
    { entity: 'Mirza M. Saeed (Verified SE)', type: 'Identity Verification', risk: 'Low', status: 'Clear' },
    { entity: 'Blackwood Capital Holdings', type: 'PEP Assessment', risk: 'Medium', status: 'PEP Watch' },
  ];

  readonly filteredAmlRecords = computed(() => {
    const q = this.amlSearchQuery().toLowerCase().trim();
    if (!q) return this.rawAmlRecords;
    return this.rawAmlRecords.filter(
      (r) =>
        r.entity.toLowerCase().includes(q) ||
        r.type.toLowerCase().includes(q) ||
        r.risk.toLowerCase().includes(q)
    );
  });

  // --- Card 4: M3 Sandbox State ---
  readonly sandboxCategory = signal<string>('Frontend');
  readonly sandboxProgress = signal<number>(75);
  readonly activeToneSeed = signal<string>('Violet');

  selectAccount(idx: number): void {
    this.selectedAccountIndex.set(idx);
  }

  setSchemaFormat(format: string): void {
    this.activeSchemaFormat.set(format as 'TypeScript' | 'JSON' | 'C# DTO');
  }

  setToneSeed(seed: string): void {
    this.activeToneSeed.set(seed);
  }
}
