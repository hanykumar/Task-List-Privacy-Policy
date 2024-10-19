// src/components/PolicySection.jsx
import React from 'react';

const PolicySection = ({ title, content }) => {
  return (
    <section style={{ padding: '20px', margin: '10px 0', borderBottom: '1px solid #ccc' }}>
      <h2>{title}</h2>
      <p>{content}</p>
    </section>
  );
};

export default React.memo(PolicySection);
