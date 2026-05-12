const MetricCard = ({ title, value, subtitle, accent }) => {
  return (
    <div className="rounded-3xl border border-slate-200/80 bg-slate-950/95 p-6 text-white shadow-soft">
      <div className={`mb-4 inline-flex rounded-2xl bg-gradient-to-r ${accent} px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-white/90`}>{title}</div>
      <p className="text-4xl font-semibold tracking-tight">{value}</p>
      <p className="mt-3 text-sm text-slate-300">{subtitle}</p>
    </div>
  );
};

export default MetricCard;
