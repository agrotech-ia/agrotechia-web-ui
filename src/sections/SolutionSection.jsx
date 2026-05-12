import SectionHeader from '../components/SectionHeader';

const SolutionSection = ({ items }) => {
  return (
    <section id="solucion" className="mt-24">
      <SectionHeader
        eyebrow="Solución AgroTechIA"
        title="Una plataforma modular para controlar cultivos con inteligencia"
        description="Cada pieza del sistema está pensada para crecer desde el MVP hasta una plataforma de gestión completa."
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item, index) => (
          <div key={item.title} className="section-card">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-3xl bg-emerald-50 text-emerald-700">
              <span className="font-semibold">{index + 1}</span>
            </div>
            <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SolutionSection;
