import PropTypes from 'prop-types';

const ContentRow = ({ tag = 'div', className = '', children }) => {
  const Tag = tag;

  return (
    <Tag
      className={`
        my-8 flex flex-wrap justify-center gap-x-8 gap-y-8
        px-3 first:mt-6 last:mb-footer-wave-height last:pb-6 lg:first:mt-10 ${className}
        `
        .trim()
        .split(/\s+/)
        .join(' ')}
    >
      {children}
    </Tag>
  );
};

ContentRow.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.string,
};

export default ContentRow;
