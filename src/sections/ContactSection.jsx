const ContactSection = () => {
  return (
    <section id="contacto" className="mt-24 pb-20">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="section-card">
          <span className="inline-flex rounded-full bg-emerald-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
            Contáctanos
          </span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900">Listo para llevar AgroTechIA a tu finca</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Completa el formulario y un asesor te contactará para validar una prueba piloto y evaluar tu instalación.
          </p>
          <div className="mt-8 grid gap-4 rounded-3xl bg-slate-100 p-6">
            <div>
              <p className="text-sm font-semibold text-slate-900">Soporte</p>
              <p className="mt-1 text-sm text-slate-600">info@agrotechia.com</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">Ubicación</p>
              <p className="mt-1 text-sm text-slate-600">Colombia · Invernaderos inteligentes</p>
            </div>
          </div>
        </div>
        <form className="section-card grid gap-5" onSubmit={(event) => event.preventDefault()}>
          <label className="block text-sm font-semibold text-slate-900">Nombre</label>
          <input type="text" placeholder="Tu nombre" className="w-full rounded-3xl border border-slate-200 bg-white px-5 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100" />
          <label className="block text-sm font-semibold text-slate-900">Tipo</label>
          <select className="w-full rounded-3xl border border-slate-200 bg-white px-5 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100">
            <option>Productor</option>
            <option>Aliado</option>
            <option>Distribuidor</option>
            <option>Otro</option>
          </select>
          <label className="block text-sm font-semibold text-slate-900">Ubicación</label>
          <input type="text" placeholder="Ciudad, región" className="w-full rounded-3xl border border-slate-200 bg-white px-5 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100" />
          <label className="block text-sm font-semibold text-slate-900">Cultivo</label>
          <input type="text" placeholder="Tomate, pimiento, café..." className="w-full rounded-3xl border border-slate-200 bg-white px-5 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100" />
          <label className="block text-sm font-semibold text-slate-900">Mensaje</label>
          <textarea rows="5" placeholder="Déjanos tu mensaje" className="w-full rounded-3xl border border-slate-200 bg-white px-5 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100" />
          <button type="submit" className="mt-4 rounded-full bg-emerald-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-700">
            Enviar consulta
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
