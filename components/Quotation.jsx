const Quotation = ({ className, text, author, source }) => {
  return (
    <figure className={className ? `${className}` : ''}>
      <blockquote
        className={
          'text-lg italic leading-8 ' +
          'before:relative before:-top-1 before:mr-1.5 before:align-middle before:text-5xl before:leading-8 before:text-primary/30 before:content-["«"] ' +
          'after:relative after:bottom-1 after:ml-1.5 after:align-middle after:text-5xl after:leading-8 after:text-primary/30 after:content-["»"]'
        }
      >
        <p className="inline align-middle">{text}</p>
      </blockquote>
      <figcaption className="mr-4 before:mr-1.5 before:content-['—'] sm:mr-12">
        {author}, <cite>{source}</cite>
      </figcaption>
    </figure>
  );
};

export default Quotation;
