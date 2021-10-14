const Quotation = ({ className, text, author, source }) => {
  return (
    <figure className={(className ? `${className}` : '')}>
      <blockquote
        className={
          'text-lg italic leading-8 ' +
          'before:content-["«"] before:leading-8 before:text-5xl before:mr-1.5 before:relative before:-top-1 before:align-middle before:text-primary before:text-opacity-30 ' +
          'after:content-["»"] after:leading-8 after:text-5xl after:ml-1.5 after:relative after:bottom-1 after:align-middle after:text-primary after:text-opacity-30'
        }
      >
        <p className="inline align-middle">{text}</p>
      </blockquote>
      <figcaption className="mr-4 sm:mr-12 before:content-['—'] before:mr-1.5">
        {author}, <cite>{source}</cite>
      </figcaption>
    </figure>
  );
};

export default Quotation;
