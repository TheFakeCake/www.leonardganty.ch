export default function ContentSection({ title, children }) {
  return (
    <section className="px-3 py-6 text-center max-w-prose mx-auto">
      <h1 className="inline-block text-3xl border-b-2 border-red-800 pb-1 mb-4">
        {title}
      </h1>
      {children}
    </section>
  );
}
