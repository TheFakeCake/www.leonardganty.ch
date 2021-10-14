import React from 'react';

const classes = `
  inline-block px-6 py-2 rounded-md bg-primary text-gray-100 font-sans ring-primary-dark transition select-none
  hover:bg-primary-light hover:focus-not-visible:bg-primary-light hover:shadow-lg
  focus:bg-primary-light focus:shadow-lg focus:outline-none focus:ring-2
  focus-not-visible:bg-primary focus-not-visible:ring-0 focus-not-visible:shadow-none
  active:hover:bg-primary-dark active:hover:shadow-md active:hover:focus-not-visible:bg-primary-dark active:hover:focus-not-visible:shadow-md
`
  .trim()
  .split(/\s+/)
  .join(' ');

const Button = React.forwardRef(({ href, onClick, type, children }, ref) => {
  if (href) {
    return (
      <a
        className={classes}
        href={href}
        onClick={onClick}
        draggable="false"
        onDragStart={(e) => e.preventDefault()} // Fix for Firefox
        ref={ref}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      className={classes}
      onClick={onClick}
      type={type ?? 'button'}
      ref={ref}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
