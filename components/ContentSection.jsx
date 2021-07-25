export default function ContentSection({ title, children }) {
  return (
    <section className="px-3 py-4 text-center">
      <h1 className="inline-block text-3xl border-b-2 border-red-800 pb-1 mb-4">
        {title}
      </h1>
      {children}
    </section>
  );
}
