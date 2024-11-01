import PropTypes from 'prop-types';

import Heading from './Heading';

function ContentSection({
  className,
  heading,
  headingLevel,
  headingStyle,
  children,
}) {
  return (
    <section
      className={
        'mx-auto box-content max-w-prose px-3 py-6 text-center' +
        (className ? ` ${className}` : '')
      }
    >
      {heading && (
        <Heading level={headingLevel} stylingLevel={headingStyle}>
          {heading}
        </Heading>
      )}
      {children}
    </section>
  );
}

ContentSection.propTypes = {
  className: PropTypes.string,
  heading: PropTypes.string,
  headingLevel: PropTypes.number,
  headingStyle: PropTypes.number,
};

export default ContentSection;
