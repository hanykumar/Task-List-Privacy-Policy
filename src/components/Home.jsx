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
  { id: 'reset-action', label: 'Reset Action' },
  { id: 'delete-action', label: 'Delete Action' },
  { id: 'contact', label: 'Contact' },
];

const policyData = [
  {
    id: 'introduction',
    title: '1) Introduction',
    content:
      'This Privacy Policy explains how Task List collects, uses, stores, and protects information when you use the application and related services.',
  },
  {
    id: 'information-we-collect',
    title: '2) Information We Collect',
    content:
      'We collect basic account information such as your email address for authentication and synchronization purposes. We also process the task-related data you create inside the app, including task titles, descriptions, reminders, categories, preferences, and other settings.',
  },
  {
    id: 'how-we-use-information',
    title: '3) How We Use Information',
    content:
      'Your information is used only to provide app functionality such as account access, task synchronization, reminders, offline sync recovery, category organization, search, filtering, and account-related support.',
  },
  {
    id: 'authentication-and-security',
    title: '4) Authentication and Security',
    content:
      'Account authentication is managed through Firebase Authentication. Task List does not directly store your account password. Industry-standard authentication and security protections are used to help protect your account and sessions.',
  },
  {
    id: 'task-data-protection',
    title: '5) Task Data Protection',
    content:
      'Task data is stored using secure Firebase-backed infrastructure. Additional safeguards may apply to sensitive or protected task categories to reduce accidental exposure.',
  },
 {
  id: 'secret-category-and-pin',
  title: '6) Secret Categories and PIN Protection',
  content:
    'Users can protect sensitive tasks by creating Secret categories secured with a PIN. The PIN is stored only on the user’s device in encrypted form and is used to unlock and access protected category tasks. Users can change their Secret category PIN at any time. To remove PIN protection from a Secret category, account password verification is required for additional security.',
},
  {
    id: 'offline-use-and-sync',
    title: '7) Offline Usage and Synchronization',
    content:
      'Task List supports offline usage. Tasks and changes created while offline are automatically synchronized when an internet connection becomes available again.',
  },
  {
    id: 'sharing-and-disclosure',
    title: '8) Sharing and Disclosure',
    content:
      'We do not sell your personal information or task data. Your data is not shared with third parties for advertising, profiling, or marketing purposes.',
  },
  {
    id: 'data-retention',
    title: '9) Data Retention',
    content:
      'Your information remains associated with your account while the account is active. You may reset your stored app data or permanently delete your account at any time from the application settings.',
  },
  {
    id: 'your-controls',
    title: '10) User Controls',
    content:
      'You can manage reminders, categories, favorites, protected content, and account-related actions directly from within the application. Some actions, including account reset and account deletion, require an active internet connection.',
  },
  {
    id: 'childrens-privacy',
    title: "11) Children's Privacy",
    content:
      'Task List is not intended for children under the age of 13. If you believe personal information belonging to a child has been submitted to the app, please contact us so appropriate action can be taken.',
  },
  {
    id: 'policy-updates',
    title: '12) Privacy Policy Updates',
    content:
      'This Privacy Policy may be updated from time to time to reflect feature updates, legal requirements, or changes to data practices. The latest version will always be available on this page.',
  },
  {
    id: 'reset-action',
    title: '13) Reset Account Data',
    content: (
      <>
        <p>
          Verified registered users can permanently remove all tasks and app-related
          data without deleting their account.
        </p>

        <p>
          Resetting your account only removes stored data associated with the app.
          Your account will remain active, and you can continue using the application normally.
        </p>

        <p>Steps to reset account data:</p>

        <ol className="policy-list">
          <li>Login to the application</li>
          <li>Go to the Settings tab</li>
          <li>Scroll down to "Reset Account"</li>
          <li>Click on it</li>
          <li>
            A confirmation modal will appear. Type <strong>Reset</strong> in the text field
          </li>
          <li>Click on "Yes"</li>
          <li>
            After successful reset, a confirmation message will appear indicating that your tasks and app data have been removed
          </li>
          <li>
            You will remain logged into the application and can continue adding new tasks or data
          </li>
        </ol>

        <p className="policy-note">
          Make sure your internet connection is enabled while performing these steps.
        </p>

        <p className="policy-note">
          Reset actions permanently remove stored tasks and related app data and cannot be undone.
        </p>
      </>
    ),
  },
  {
  id: 'delete-action',
  title: '14) Delete Account',
  content: (
    <>
      <p>
        Verified registered users can permanently delete their account together
        with all associated tasks and app data.
      </p>

      <p>
        Account deletion is available through both the mobile application and the web application.
        Once deletion is completed, the account and associated data cannot be recovered.
      </p>

      <p>Steps to delete your account from the mobile application:</p>

      <ol className="policy-list">
        <li>Login to the application</li>
        <li>Go to the Settings tab</li>
        <li>Scroll down to "Delete Account"</li>
        <li>Click on it</li>
        <li>
          A confirmation modal will appear. Enter your <strong>password</strong> to confirm deletion
        </li>
        <li>Click on "Yes"</li>
        <li>
          After successful deletion, a confirmation message will appear
        </li>
        <li>
          You will be logged out of the application and redirected to the login screen
        </li>
      </ol>

      <p>Steps to delete your account from the web application:</p>

      <ol className="policy-list">
        <li>Login to the web application</li>
        <li>Open the Settings page from the header menu</li>
        <li>Go to "Delete Account"</li>
        <li>Enter your account password to confirm deletion</li>
        <li>Confirm the deletion request</li>
      </ol>

      <p className="policy-note">
        Make sure your internet connection is enabled while performing these steps.
      </p>

      <p className="policy-note">
        We do not retain deleted user account data after the deletion process is completed.
      </p>
    </>
  ),
},
  {
    id: 'contact',
    title: '15) Contact',
    content: (
      <>
        <p>
          For support, privacy concerns, or account-related questions, please visit{' '}
          <a
            href={appContent.links.developerSite.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {appContent.links.developerSite.title}
          </a>
          .
        </p>

        <p>
          Official web app:{' '}
          <a
            href={appContent.links.appSite.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {appContent.links.appSite.title}
          </a>
        </p>

        <p>
          Android application:{' '}
          <a
            href={appContent.links.androidApp.url}
            target="_blank"
            rel="noopener noreferrer"
          >
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