import PropTypes from 'prop-types';

const styles = {
  1: 'pb-1 text-3xl leading-normal border-b-2 border-primary',
  2: 'text-2xl',
  3: 'text-xl italic',
  4: 'text-lg',
  5: 'text-lg',
  6: 'text-md',
};

const containers = {
  1: (className, content) => <h1 className={'my-4' + className}>{content}</h1>,
  2: (className, content) => <h2 className={'my-3' + className}>{content}</h2>,
  4: (className, content) => <h4 className={'my-2' + className}>{content}</h4>,
  3: (className, content) => <h3 className={'my-3' + className}>{content}</h3>,
  5: (className, content) => <h5 className={'my-2' + className}>{content}</h5>,
  6: (className, content) => <h6 className={'my-1' + className}>{content}</h6>,
};

function Heading({ level, stylingLevel, className, children }) {
  if (!stylingLevel) {
    stylingLevel = level;
  }

  const styledContent = (
    <span className={styles[stylingLevel]}>{children}</span>
  );

  if (className && className[0] != ' ') {
    className = ' ' + className;
  }

  return containers[level](className, styledContent);
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
