import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import ProblemSection from './sections/ProblemSection';
import SolutionSection from './sections/SolutionSection';
import ModulesSection from './sections/ModulesSection';
import BenefitsSection from './sections/BenefitsSection';
import ImpactSection from './sections/ImpactSection';
import DemoSection from './sections/DemoSection';
import ContactSection from './sections/ContactSection';
import { problemCards, solutionCards, moduleCards, benefitCards, impactCards, dashboard } from './data/mockDashboard';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main className="relative overflow-hidden">
        <Hero />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <ProblemSection items={problemCards} />
          <SolutionSection items={solutionCards} />
          <ModulesSection items={moduleCards} />
          <BenefitsSection items={benefitCards} />
          <ImpactSection items={impactCards} />
          <DemoSection data={dashboard} />
          <ContactSection />
        </div>
      </main>
    </div>
  );
}

export default App;
