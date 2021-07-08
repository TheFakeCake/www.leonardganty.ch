import React from 'react';

const classes = `
  inline-block px-6 py-2 rounded-lg bg-red-800 text-gray-100 font-sans
  hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg
  active:bg-red-900
`;

const Button = React.forwardRef(({ onClick, href, children }, ref) => {
  if (href) {
    return (
      <a className={classes} href={href} onClick={onClick} ref={ref}>
        {children}
      </a>
    );
  }
  return (
    <button className={classes} onClick={onClick} ref={ref}>
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
