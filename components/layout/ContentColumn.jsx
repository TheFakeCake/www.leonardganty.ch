import PropTypes from 'prop-types';

const ContentColumn = ({ tag, className, children }) => {
  const Tag = tag;
  return (
    <Tag className={`flex-grow w-full ${className}`.trim()}>{children}</Tag>
  );
};

ContentColumn.defaultProps = {
  className: 'max-w-prose',
  tag: 'div',
};

ContentColumn.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.string.isRequired,
};

export default ContentColumn;
