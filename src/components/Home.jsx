import PolicySection from './PolicySection';

const APP_NAME = 'Task List';
const EFFECTIVE_DATE = 'May 11, 2026';

const appContent = {
  overview: {
    title: 'Privacy-first task management',
    subtitle: 'Task List is designed to help you stay organized while keeping your data private and secure.',
    bullets: [
      'Works offline and syncs when internet is back.',
      'Sensitive task content is protected with Firebase-backed security controls.',
      'Completely ad-free and free to use.',
    ],
  },
  links: {
    appSite: {
      title: 'tasklist.hanykumar.in',
      url: 'https://tasklist.hanykumar.in',
    },
    androidApp: {
      title: 'Google Play (Android)',
      url: 'https://play.google.com/store/apps/details?id=com.hanykumar.tasklist&hl=en',
    },
    developerSite: {
      title: 'hanykumar.in',
      url: 'https://hanykumar.in',
    },
  },
};

const quickLinks = [
  { id: 'information-we-collect', label: 'Information We Collect' },
  { id: 'how-we-use-information', label: 'How We Use Information' },
  { id: 'sharing-and-disclosure', label: 'Sharing and Disclosure' },
  { id: 'data-retention', label: 'Data Retention' },
  { id: 'your-controls', label: 'Your Controls' },
  { id: 'contact', label: 'Contact' },
];

const policyData = [
  {
    id: 'introduction',
    title: '1) Introduction',
    content:
      'This Privacy Policy explains how Task List collects, uses, and protects your information when you use the app and related services.',
  },
  {
    id: 'information-we-collect',
    title: '2) Information We Collect',
    content:
      'We collect your email address for account authentication and sync. We also process task data you create, including titles, descriptions, categories, reminders, and app preferences.',
  },
  {
    id: 'how-we-use-information',
    title: '3) How We Use Information',
    content:
      'Your information is used only to provide and improve core functionality such as authentication, task syncing, reminders, category management, search/filter operations, and account support.',
  },
  {
    id: 'authentication-and-security',
    title: '4) Authentication and Security',
    content:
      'Authentication is managed through Firebase. Passwords are not stored directly by Task List. We rely on Firebase authentication and standard security protections for session and account safety.',
  },
  {
    id: 'task-data-protection',
    title: '5) Task Data Protection',
    content:
      'Task content is protected and stored using secure Firebase-backed infrastructure. Sensitive categories include additional safeguards to reduce accidental exposure.',
  },
  {
    id: 'secret-category-and-pin',
    title: '6) Secret Category and PIN',
    content:
      'Sensitive tasks can be protected inside Secret categories with a PIN. Copy restrictions may apply for these entries to help protect confidential data.',
  },
  {
    id: 'offline-use-and-sync',
    title: '7) Offline Use and Sync',
    content:
      'Task List supports offline usage. Changes made offline sync automatically once internet connectivity returns.',
  },
  {
    id: 'sharing-and-disclosure',
    title: '8) Sharing and Disclosure',
    content:
      'We do not sell personal data. We do not share your task content with third parties for advertising or marketing.',
  },
  {
    id: 'data-retention',
    title: '9) Data Retention',
    content:
      'Your data is retained while your account remains active. You can reset your tasks or delete your account at any time from settings.',
  },
  {
    id: 'your-controls',
    title: '10) Your Controls',
    content:
      'You can manage categories, favorites, reminders, and account-related actions from within the app. Reset and account deletion actions require internet connectivity to complete.',
  },
  {
    id: 'childrens-privacy',
    title: "11) Children's Privacy",
    content:
      'Task List is not intended for children under 13. If you believe a child has provided personal information, contact us and we will take appropriate action.',
  },
  {
    id: 'policy-updates',
    title: '12) Policy Updates',
    content:
      'We may update this policy when features, legal requirements, or data practices change. The current version will always be available on this page.',
  },
  {
    id: 'reset-and-delete-actions',
    title: '13) Reset and Delete Actions',
    content: (
      <>
        <p>
          You can reset tasks without deleting your account, or permanently delete your account from app settings.
        </p>
        <p className="policy-note">
          Account deletion removes account-associated data from our systems and cannot be undone.
        </p>
      </>
    ),
  },
  {
    id: 'contact',
    title: '14) Contact',
    content: (
      <>
        <p>
          For support or privacy-related questions, visit{' '}
          <a href={appContent.links.developerSite.url} target="_blank" rel="noopener noreferrer">
            {appContent.links.developerSite.title}
          </a>
          .
        </p>
        <p>
          Task List web app:{' '}
          <a href={appContent.links.appSite.url} target="_blank" rel="noopener noreferrer">
            {appContent.links.appSite.title}
          </a>
        </p>
        <p>
          Android app:{' '}
          <a href={appContent.links.androidApp.url} target="_blank" rel="noopener noreferrer">
            {appContent.links.androidApp.title}
          </a>
        </p>
      </>
    ),
  },
];

const Home = () => {
  const currentYear = new Date().getFullYear();

  return (
    <main className="app-container">
      <header className="app-header">
        <img src="/icon.png" alt="Task List App icon" className="app-icon" />
        <div>
          <h1>{APP_NAME} Privacy Policy</h1>
          <p className="app-subtitle">Effective date: {EFFECTIVE_DATE}</p>
        </div>
      </header>

      <section className="overview-card">
        <h2>{appContent.overview.title}</h2>
        <p>{appContent.overview.subtitle}</p>
        <ul>
          {appContent.overview.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="toc-card" aria-label="Quick links">
        <h2>Quick links</h2>
        <ul className="toc-list">
          {quickLinks.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`}>{item.label}</a>
            </li>
          ))}
        </ul>
      </section>

      <section className="policy-content">
        {policyData.map((section) => (
          <PolicySection
            key={section.id}
            sectionId={section.id}
            title={section.title}
            content={section.content}
          />
        ))}
      </section>

      <footer className="policy-footer">
        <p>
          © {APP_NAME} {currentYear}. All rights reserved.
        </p>
        <p>
          Official website:{' '}
          <a href={appContent.links.appSite.url} target="_blank" rel="noopener noreferrer">
            {appContent.links.appSite.title}
          </a>
        </p>
        <p>
          Android app:{' '}
          <a href={appContent.links.androidApp.url} target="_blank" rel="noopener noreferrer">
            {appContent.links.androidApp.title}
          </a>
        </p>
      </footer>
    </main>
  );
};

export default Home;