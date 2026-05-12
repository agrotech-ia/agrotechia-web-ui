import SectionHeader from '../components/SectionHeader';
import MetricCard from '../components/MetricCard';
import TrendChart from '../components/TrendChart';

const DemoSection = ({ data }) => {
  return (
    <section id="demo" className="mt-24">
      <SectionHeader
        eyebrow="Demo"
        title="Dashboard simulado para visión inmediata"
        description="Un prototipo visual que muestra métricas clave, alertas y tendencias de un invernadero inteligente."
      />
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="grid gap-6 md:grid-cols-2">
          {data.metrics.map((metric) => (
            <MetricCard key={metric.title} title={metric.title} value={metric.value} subtitle={metric.subtitle} accent={metric.accent} />
          ))}
        </div>
        <div className="grid gap-6">
          <TrendChart data={data.trend} />
          <div className="section-card">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Alertas</p>
                <h3 className="mt-2 text-2xl font-semibold text-slate-900">Estado del invernadero</h3>
              </div>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">
                Estable
              </span>
            </div>
            <div className="mt-6 space-y-4">
              {data.alerts.map((alert) => (
                <div key={alert.message} className="rounded-3xl border border-slate-200/80 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{alert.label}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{alert.message}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
