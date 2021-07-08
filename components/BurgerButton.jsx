function BurgerButton({ className, onClick, toggled, ...otherProps }) {
  return (
    <button
      className={
        'burger-btn' +
        (className ? ' ' + className : '') +
        (toggled ? ' toggled' : '')
      }
      onClick={onClick}
      role="button"
      aria-controls={otherProps['aria-controls']}
      aria-label={otherProps['aria-label']}
      aria-expanded={toggled}
    >
      <div className="burger-line top" aria-hidden="true"></div>
      <div className="burger-line middle" aria-hidden="true"></div>
      <div className="burger-line bottom" aria-hidden="true"></div>
    </button>
  );
}

export default BurgerButton;
