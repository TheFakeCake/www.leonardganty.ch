import PropTypes from 'prop-types';

const ContentRow = ({ tag, className, children }) => {
  const Tag = tag;

  return (
    <Tag
      className={`
        my-8 px-3 first:mt-6 last:mb-footer-wave-height last:pb-6 lg:first:mt-10
        flex flex-wrap justify-center gap-x-8 gap-y-8 ${className}
        `
        .trim()
        .split(/\s+/)
        .join(' ')}
    >
      {children}
    </Tag>
  );
};

ContentRow.defaultProps = {
  className: '',
  tag: 'div',
};

ContentRow.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.string.isRequired,
};

export default ContentRow;
