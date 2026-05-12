const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Solución', href: '#solucion' },
  { label: 'Módulos', href: '#modulos' },
  { label: 'Beneficios', href: '#beneficios' },
  { label: 'Impacto', href: '#impacto' },
  { label: 'Demo', href: '#demo' },
  { label: 'Contacto', href: '#contacto' },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="text-xl font-semibold tracking-tight text-slate-900">
          AgroTechIA
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a href="#demo" className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900">
            Ver demo
          </a>
          <a href="#contacto" className="rounded-full bg-gradient-to-r from-emerald-600 to-sky-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:opacity-95">
            Iniciar sesión
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
