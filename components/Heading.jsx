import PropTypes from 'prop-types';

const containerStyles = {
  1: 'mt-6 mb-5 first:mt-0',
  2: 'mt-5 mb-3 first:mt-0',
  3: 'mt-4 mb-3 first:mt-0',
  4: 'my-2 first:mt-0',
  5: 'my-2 first:mt-0',
  6: 'my-1 first:mt-0',
};

const contentStyles = {
  1: 'pb-1 text-3xl leading-normal border-b-2 border-primary',
  2: 'text-2xl leading-normal',
  3: 'text-xl italic',
  4: 'text-lg',
  5: 'text-lg',
  6: 'text-md',
};

function Heading({ level, stylingLevel, className, children }) {
  if (!stylingLevel) {
    stylingLevel = level;
  }

  const Tag = `h${level}`;

  return (
    <Tag
      className={
        containerStyles[stylingLevel] + (className ? ` ${className}` : '')
      }
    >
      <span className={contentStyles[stylingLevel]}>{children}</span>
    </Tag>
  );
}

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  stylingLevel: PropTypes.oneOf([1, 2, 3, 5, 6]),
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
};

Heading.defaultProps = {
  level: 1,
};

export default Heading;
