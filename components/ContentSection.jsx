export default function ContentSection({ className, title, children }) {
  return (
    <section
      className={'px-3 py-6 text-center' + (className ? ' ' + className : '')}
    >
      <h1 className="inline-block pb-1 mb-4 text-3xl border-b-2 max-w-prose border-primary">
        {title}
      </h1>
      <div className="mx-auto max-w-prose">{children}</div>
    </section>
  );
}
