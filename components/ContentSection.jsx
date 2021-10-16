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
        'px-3 py-6 mx-auto max-w-prose box-content text-center' +
        (className ? ` ${className}` : '')
      }
    >
      {heading && (
        <Heading
          className="mt-0"
          level={headingLevel}
          stylingLevel={headingStyle}
        >
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
