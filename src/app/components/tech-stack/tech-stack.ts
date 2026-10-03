import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

interface SkillCategory {
  title: string;
  icon: string;
  summary: string;
  skills: string[];
}

@Component({
  selector: 'app-tech-stack',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './tech-stack.html',
  styleUrl: './tech-stack.scss',
})
export class TechStack {
  readonly activeCategory = signal<string>('all');

  readonly categories: SkillCategory[] = [
    {
      title: 'Frontend & State Management',
      icon: 'devices',
      summary: 'Reactive frameworks, deep state management, and modern component systems.',
      skills: [
        'Angular 19/21',
        'Angular Signals',
        'React.js',
        'Next.js',
        'Vue.js 2 & 3',
        'RxJS',
        'NgRx',
        'Redux',
        'Pinia',
        'Vuex',
        'Zustand',
        'TypeScript',
      ],
    },
    {
      title: 'Backend, APIs & Microservices',
      icon: 'dns',
      summary: 'Transactional engines, auditable ledgers, and real-time distributed communication.',
      skills: [
        'Node.js',
        'Express.js',
        'Laravel',
        'PHP',
        'REST APIs',
        'Double-Entry Ledgers',
        'Socket.IO',
        'SignalR',
        'Server-Side Rendering (SSR)',
      ],
    },
    {
      title: 'Databases & Data Pipelines',
      icon: 'database',
      summary: 'Relational data modeling, ACID compliance, ETL ingestion, and analytics dashboards.',
      skills: [
        'PostgreSQL',
        'MySQL',
        'MongoDB',
        'Data Pipelines',
        'Excel-to-DB ETL',
        'Data Aggregation & Filtering',
        'Audit Logging',
      ],
    },
    {
      title: 'UI Frameworks & Design Systems',
      icon: 'palette',
      summary: 'Accessible, responsive component libraries and expressive Material 3 implementations.',
      skills: [
        'Angular Material (M3)',
        'Ant Design',
        'Tailwind CSS',
        'SCSS / SASS',
        'MUI (Material-UI)',
        'Vuetify',
        'Quasar Framework',
        'Bootstrap',
        'Chakra UI',
        'Figma-to-Code',
      ],
    },
    {
      title: 'Tools, DevOps & Practices',
      icon: 'terminal',
      summary: 'Version control workflows, containerization, test automation, and enterprise delivery.',
      skills: [
        'Git & GitHub',
        'Postman',
        'Webpack',
        'Docker',
        'PWA',
        'i18n / Localization',
        'Cross-Platform Deep Linking',
        'Code Review & PR Management',
        'Vitest & Unit Testing',
      ],
    },
    {
      title: 'Domain Strengths: FinTech & RegTech',
      icon: 'account_balance',
      summary: 'High-stakes remittance, treasury systems, and anti-money laundering compliance.',
      skills: [
        'Accounts & Treasury ERP',
        'Double-Entry Ledgers',
        'FX & Payout Deals',
        'Wires Management',
        'AML Watcher & Screening',
        'THE KYB Compliance',
        'Voucher Management (Journal/Receipt)',
        'Chart of Accounts & Bank Management',
      ],
    },
  ];
}
