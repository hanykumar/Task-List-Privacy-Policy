// src/App.jsx
import React from 'react';
import PolicySection from './PolicySection';
import '../App.css';

const policyData = [
  {
    title: 'About Task List',
    content:
      'Task List is a feature-rich application designed to help you organize and manage tasks efficiently across multiple categories, including To-do, Shopping List, Work, Personal, Passwords, and others. With a focus on simplicity, security, and performance, Task List offers advanced features such as encryption, favorite tasks, theme management, and seamless search capabilities.',
  },
  {
    title: 'Introduction',
    content:
      'The Task List application ensures your tasks are safe and organized in a secure environment. We offer ad-free, free-of-cost access to help you focus on productivity without interruptions. With multiple categories and features like starred tasks and password protection, Task List helps you manage your workload with ease.',
  },
  {
    title: 'Data Collection and Authentication',
    content:
      'We collect your email ID during registration to authenticate users. Authentication is handled by Google Firebase. We never store your passwords; instead, Firebase ensures secure authentication using industry-standard encryption protocols.',
  },
  {
    title: 'Task Data Encryption and Security',
    content:
      'All task titles and content are encrypted before being stored in Firebase, ensuring your data is always protected. Tasks under the "Passwords" category are hidden by default for additional security, with an option to reveal them temporarily as needed.',
  },
  {
    title: 'Themes and User Experience',
    content:
      'The application supports both Light and Dark themes, allowing you to switch based on your preference. You can also set the app to follow your system theme for a seamless experience.',
  },
  {
    title: 'Managing Favorite Tasks and Categories',
    content:
      'Tasks can be marked as favorites to prioritize important items. Additionally, the app allows you to organize tasks by category, such as To-do, Work, or Personal, making it easy to keep things structured.',
  },
  {
    title: 'Copy Restrictions for Sensitive Data',
    content:
      'For security purposes, copying content from tasks in the "Passwords" category is restricted. This ensures that your sensitive data remains protected from unauthorized copying.',
  },
  {
    title: 'Search and Filter Capabilities',
    content:
      'Easily search and filter tasks by category, title, or content. You can also filter by starred tasks, making it easier to access your most important tasks quickly.',
  },
  {
    title: 'Resetting Tasks',
    content:
      'If you need to clear all tasks without deleting your account, you can reset your task list from the settings. This action deletes all tasks, but you can continue using the app and add new tasks afterward.',
  },
  {
    title: 'Account Deletion and Data Erasure',
    content:
      'If you decide to discontinue using the app, you can delete your account from the settings. This action permanently erases all your data, including tasks and account information, and cannot be undone.',
  },
  {
    title: 'Network Requirements for Account Actions',
    content:
      'Ensure you have an active internet connection while performing actions such as resetting tasks or deleting your account. These operations require server communication to complete.',
  },
  {
    title: 'Privacy Policy Transparency',
    content:
      'We are committed to transparency in how your data is handled. Our privacy policy is available on both the app and the web at https://task list.hanykumar.in, ensuring you have full visibility of our data practices.',
  },
  {
    title: 'Data Sharing Policy',
    content:
      'We do not share your personal information or task data with third parties. All data is securely managed within the Firebase ecosystem.',
  },
  {
    title: 'No Ads, Free of Cost',
    content:
      'Task List is completely ad-free and free to use, providing you with a smooth, uninterrupted task management experience.',
  },
  {
    title: 'TaskList Web Application',
    content: (
      <span>
        Access the TaskList app online at{' '}
        <a href="https://tasklist.hanykumar.in" target="_blank" rel="noopener noreferrer">
          tasklist.hanykumar.in
        </a>.
      </span>
    ),
  },
  {
    title: 'Contact and Support',
    content: (
      <span>
        For any questions or support, reach out through the "Write to Us" section in the app or visit our website at{' '}
        <a href="https://hanykumar.in" target="_blank" rel="noopener noreferrer">
          hanykumar.in
        </a>. We are committed to providing prompt assistance for any issues or inquiries.
      </span>
    ),
  }
];


const Home = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <img src="src\assets\icon.png" alt="Task List App" className="app-icon" />
        <h1>Task List - Privacy & Policy</h1>
      </header>

      <div className="policy-content">
        {policyData.map((section, index) => (
          <PolicySection key={index} title={section.title} content={section.content} />
        ))}
      </div>
    </div>
  );
};

export default Home;