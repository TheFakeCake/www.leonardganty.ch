import PropTypes from 'prop-types';

const PageContentRow = ({ tag, className, children }) => {
  const Tag = tag;

  return (
    <Tag
      className={`
        my-8 px-3 first:mt-6 last:mb-footer-wave-height last:pb-6 lg:first:mt-10
        flex flex-wrap justify-center gap-x-8 gap-y-8 text-center ${className}
        `
        .trim()
        .split(/\s+/)
        .join(' ')}
    >
      {children}
    </Tag>
  );
};

PageContentRow.defaultProps = {
  className: '',
  tag: 'div',
};

PageContentRow.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.string.isRequired,
};

export default PageContentRow;
