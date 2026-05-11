// src/components/PolicySection.jsx
import PropTypes from 'prop-types';
import { memo } from 'react';

const PolicySection = ({ sectionId, title, content }) => {
  return (
    <section id={sectionId} className="policy-section">
      <h2>{title}</h2>
      <div className="policy-body">
        {typeof content === 'string' ? <p>{content}</p> : content}
      </div>
    </section>
  );
};

PolicySection.propTypes = {
  sectionId: PropTypes.string,
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
};

PolicySection.defaultProps = {
  sectionId: undefined,
};

export default memo(PolicySection);
