import { ChangeDetectionStrategy, Component } from '@angular/core';

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent: boolean;
  description: string;
  highlights: string[];
  skills: string[];
}

@Component({
  selector: 'app-experience',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  readonly experiences: ExperienceItem[] = [
    {
      id: 'ace',
      role: 'Software Engineer',
      company: 'ACE Money Transfer (Liaison Office)',
      location: 'Kharian, Punjab, Pakistan',
      period: 'Nov 2024 – Present',
      isCurrent: true,
      description:
        'Full-stack engineering and architecture for high-stakes FinTech SaaS platforms, enterprise treasury ERP, and modern front-end migrations.',
      highlights: [
        'Collaborated on frontend development and architecture for the Angular 19 SaaS migration, enhancing scalability and treasury workflows.',
        'Re-architected ACE Union frontend from Laravel Blade to Next.js with Ant Design, reducing page load time by 45% and boosting developer productivity by 50%.',
        'Enhanced secure, auditable financial systems for ACE Union by engineering a double-entry ledger in Laravel.',
        'Engineered core transactional modules covering FX, Payout Deals, and Wires as part of the Accounts & Treasury Management System (ERP).',
        'Developed comprehensive Accounts & Treasury Management System (ERP) features: partner onboarding (remittance/non-remittance), voucher management (journal/payment/receipt), procurement, and chart of accounts/bank management.',
        'Implemented cross-platform deep-linking for seamless mobile navigation in ACE Union and improved payment-gateway reliability.',
      ],
      skills: [
        'Angular 19/21',
        'Next.js',
        'React.js',
        'Laravel',
        'Double-Entry Ledgers',
        'Ant Design',
        'Accounts & Treasury ERP',
        'Deep Linking',
      ],
    },
    {
      id: 'pf',
      role: 'Associate Software Engineer',
      company: 'Programmers Force',
      location: 'Lahore, Punjab, Pakistan',
      period: 'April 2024 – Oct 2024',
      isCurrent: false,
      description:
        'Frontend development for AML Watcher RegTech compliance toolkit, organizational monitoring portals, and browser media-capture software.',
      highlights: [
        'Contributed to frontend development for AML Watcher, a RegTech compliance toolkit; implemented features for case search, comprehensive case management, and detailed case views.',
        'Developed risk management views within the AML Watcher case search interface and contributed to an admin portal that streamlined organizational monitoring, reducing administrative overhead by 80%.',
        'Engineered resource management dashboards and custom media-control features for Recordly, utilizing JS DOM manipulation to implement robust camera-injection scripts.',
        'Optimized frontend performance and scalability by implementing reusable component design patterns, custom theming, and performance-driven techniques including async component rendering and lazy loading.',
      ],
      skills: [
        'AML Watcher',
        'RegTech',
        'Vue.js',
        'DOM Manipulation',
        'Async Rendering',
        'Lazy Loading',
        'Recordly',
      ],
    },
    {
      id: 'devstudio',
      role: 'Associate Software Engineer',
      company: 'Developers Studio',
      location: 'Lahore, Punjab, Pakistan',
      period: 'Oct 2023 – April 2024',
      isCurrent: false,
      description:
        'Developed compliance research dashboards, KYC analytics interfaces, and automated PostgreSQL data migration pipelines.',
      highlights: [
        'Developed analytics dashboards, data visualizations, and advanced filtering tools for THE KYB Source Portal, a KYC-focused RegTech product.',
        'Transformed raw data pipelines from Excel to PostgreSQL to power compliance research dashboards.',
        'Contributed to AML Research Portal by building custom filter components, reusable modules, and permission-based access controls.',
      ],
      skills: [
        'THE KYB',
        'PostgreSQL',
        'Data Pipelines',
        'Analytics Dashboards',
        'Vue.js',
        'Quasar',
        'Permission Controls',
      ],
    },
  ];
}
