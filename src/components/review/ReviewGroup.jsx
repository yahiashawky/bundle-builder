function ReviewGroup({ title, children }) {
  return (
    <section className="space-y-4">
      <h3 className="border-b pb-2 text-sm font-semibold uppercase tracking-wide text-gray-500">
        {title}
      </h3>

      {children}
    </section>
  );
}

export default ReviewGroup;
