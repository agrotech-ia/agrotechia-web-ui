const TrendChart = ({ data }) => {
  const max = Math.max(...data.map((item) => item.value));
  const points = data
    .map((item, index) => `${(index / (data.length - 1)) * 100},${100 - (item.value / max) * 100}`)
    .join(' ');

  return (
    <div className="glass-panel overflow-hidden p-6">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Tendencia semanal</p>
          <h3 className="mt-2 text-xl font-semibold text-slate-900">Clima inteligente</h3>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-700">
          Datos simulados
        </span>
      </div>
      <div className="relative h-56 w-full">
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <defs>
            <linearGradient id="lineGradient" x1="0" x2="100%" y1="0" y2="0">
              <stop offset="0%" stopColor="#0f766e" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
          </defs>
          <polyline
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="3"
            points={points}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {data.map((item, index) => {
            const x = (index / (data.length - 1)) * 100;
            const y = 100 - (item.value / max) * 100;
            return (
              <g key={item.label}>
                <circle cx={x} cy={y} r="2.5" fill="#0f766e" />
                <text x={x} y={y - 6} textAnchor="middle" className="text-[3px] fill-slate-900">
                  {item.value}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {data.map((item) => (
          <div key={item.label} className="rounded-3xl bg-white/90 p-4 text-slate-800 shadow-sm">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">{item.label}</p>
            <p className="mt-2 text-lg font-semibold">{item.value}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendChart;
