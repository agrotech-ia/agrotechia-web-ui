import SectionHeader from '../components/SectionHeader';

const ModulesSection = ({ items }) => {
  return (
    <section id="modulos" className="mt-24">
      <SectionHeader
        eyebrow="Módulos"
        title="Capas del sistema diseñadas para el campo conectado"
        description="Un producto dividido en módulos claros ayuda a los clientes a entender el valor inmediato y la hoja de ruta futura."
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {items.map((module) => (
          <div key={module.title} className="section-card">
            <div className={`mb-5 inline-flex rounded-2xl px-4 py-2 text-sm font-semibold ${module.accent}`}>
              {module.title}
            </div>
            <p className="text-sm leading-7 text-slate-600">{module.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ModulesSection;
