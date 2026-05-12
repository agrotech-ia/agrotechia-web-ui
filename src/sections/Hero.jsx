const Hero = () => {
  return (
    <section id="inicio" className="relative overflow-hidden px-4 pt-10 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-r from-emerald-100 via-slate-50 to-sky-100 opacity-80" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="py-16 sm:py-24">
            <span className="inline-flex rounded-full bg-emerald-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.32em] text-emerald-700">
              Plataforma SaaS agrícola
            </span>
            <h1 className="mt-8 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Invernaderos inteligentes para productores del futuro
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Monitorea, automatiza y optimiza tus cultivos con datos, sensores e inteligencia artificial. Una landing profesional para validar AgroTechIA y escalar a un portal privado de monitoreo.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#demo" className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-700">
                Ver demo
              </a>
              <a href="#contacto" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-900 transition hover:border-slate-400">
                Quiero implementar uno
              </a>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white/90 p-6 shadow-soft">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Impacto inicial</p>
                <p className="mt-3 text-3xl font-semibold text-slate-900">+25% productividad</p>
                <p className="mt-2 text-sm text-slate-600">Métricas simuladas para mostrar beneficios de IA y control climático.</p>
              </div>
              <div className="rounded-3xl bg-white/90 p-6 shadow-soft">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Ecosistema</p>
                <p className="mt-3 text-3xl font-semibold text-slate-900">Sensores + datos + UX</p>
                <p className="mt-2 text-sm text-slate-600">Diseñado para ser modular, fácil de escalar y listo para fases futuras.</p>
              </div>
            </div>
          </div>
          <div className="relative rounded-[40px] border border-slate-200/60 bg-gradient-to-br from-white to-slate-100 p-6 shadow-soft backdrop-blur-md sm:p-8">
            <div className="absolute -left-10 top-10 h-24 w-24 rounded-full bg-emerald-200/80 blur-3xl" />
            <div className="absolute -right-12 bottom-8 h-28 w-28 rounded-full bg-sky-200/80 blur-3xl" />
            <div className="relative grid gap-6">
              <div className="rounded-[28px] bg-slate-950 p-6 text-white shadow-xl">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Vista rápida</p>
                <p className="mt-4 text-3xl font-semibold">Panel de monitoreo</p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-slate-900/95 p-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Temperatura</p>
                    <p className="mt-3 text-2xl font-semibold">28°C</p>
                  </div>
                  <div className="rounded-3xl bg-slate-900/95 p-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Humedad</p>
                    <p className="mt-3 text-2xl font-semibold">68%</p>
                  </div>
                </div>
              </div>
              <div className="rounded-[28px] bg-white p-6 shadow-sm">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Módulos clave</p>
                <div className="mt-6 grid gap-3">
                  <div className="rounded-3xl border border-slate-200 p-4">
                    <p className="font-semibold text-slate-900">Clima</p>
                    <p className="mt-1 text-sm text-slate-500">Temperatura y ventilación conectados.</p>
                  </div>
                  <div className="rounded-3xl border border-slate-200 p-4">
                    <p className="font-semibold text-slate-900">Suelo</p>
                    <p className="mt-1 text-sm text-slate-500">Humedad y nutrientes visibles.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
