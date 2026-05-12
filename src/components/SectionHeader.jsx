const SectionHeader = ({ eyebrow, title, description }) => {
  return (
    <div className="mb-10 max-w-3xl">
      {eyebrow ? <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-[0.3em] text-teal-700">{eyebrow}</span> : null}
      <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>
    </div>
  );
};

export default SectionHeader;
