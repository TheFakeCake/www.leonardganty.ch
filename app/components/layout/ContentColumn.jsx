import PropTypes from 'prop-types';

const ContentColumn = ({
  tag = 'div',
  className = 'max-w-prose',
  children,
}) => {
  const Tag = tag;
  return <Tag className={`w-full grow ${className}`.trim()}>{children}</Tag>;
};

ContentColumn.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.string,
};

export default ContentColumn;
