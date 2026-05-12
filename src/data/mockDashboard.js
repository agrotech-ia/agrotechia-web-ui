export const problemCards = [
  {
    title: 'Control climático limitado',
    description: 'Sin acceso a datos de temperatura y humedad en tiempo real, el clima del invernadero puede salirse de control.',
  },
  {
    title: 'Detección tardía de enfermedades',
    description: 'Las alertas llegan después de la pérdida de cosechas, cuando ya es difícil recuperar producción.',
  },
  {
    title: 'Riego poco eficiente',
    description: 'El agua se aplica por rutina en lugar de basarse en la condición real del suelo y cultivo.',
  },
  {
    title: 'Pérdidas económicas',
    description: 'Sin datos, los agricultores no pueden planear ni justificar inversiones en tecnología.',
  },
  {
    title: 'Falta de datos',
    description: 'Decisiones basadas en intuición en lugar de información verificable y tendencias históricas.',
  },
];

export const solutionCards = [
  {
    title: 'Sensores IoT',
    description: 'Nodo de sensores para clima, suelo y luminosidad con datos centralizados en un dashboard visual.',
  },
  {
    title: 'Monitoreo en tiempo real',
    description: 'Visualiza estado de invernaderos y cultivos en un panel claro con indicadores clave.',
  },
  {
    title: 'Alertas inteligentes',
    description: 'Notificaciones tempranas sobre condiciones críticas y oportunidades de ajuste.',
  },
  {
    title: 'Automatización futura',
    description: 'Diseñado para agregar bombas y válvulas sin cambiar la base del producto.',
  },
  {
    title: 'IA para cultivos',
    description: 'Modelo de recomendaciones para riego y clima que impulsará la productividad en fases posteriores.',
  },
  {
    title: 'Funcionamiento offline',
    description: 'La arquitectura considera almacenamiento local y reintentos cuando no hay conexión.',
  },
];

export const moduleCards = [
  {
    title: 'Clima',
    description: 'Temperatura, humedad y ventilación para condiciones óptimas de cultivo.',
    accent: 'bg-emerald-50 text-emerald-700',
  },
  {
    title: 'Suelo',
    description: 'Humedad, nutrientes y conductividad para una fertilización precisa.',
    accent: 'bg-sky-50 text-sky-700',
  },
  {
    title: 'Riego/Fertirriego',
    description: 'Programación inteligente con prioridades por zonas y clima.',
    accent: 'bg-lime-50 text-lime-700',
  },
  {
    title: 'Visión Artificial',
    description: 'Detección de plagas, crecimiento y daños visuales con IA.',
    accent: 'bg-cyan-50 text-cyan-700',
  },
  {
    title: 'Productividad',
    description: 'Indicadores de rendimiento y potencial de cosecha en cada etapa.',
    accent: 'bg-violet-50 text-violet-700',
  },
];

export const benefitCards = [
  {
    title: 'Aumento de productividad',
    description: 'Decisiones basadas en datos para aprovechar cada ciclo de cultivo.',
  },
  {
    title: 'Reducción de pérdidas',
    description: 'Detecta condiciones críticas y evita pérdidas por descontrol climático.',
  },
  {
    title: 'Decisiones basadas en datos',
    description: 'Panel claro que transforma mediciones en oportunidades de acción.',
  },
  {
    title: 'Uso eficiente de recursos',
    description: 'Menos agua y energía usando información de sensores reales.',
  },
  {
    title: 'Tecnología accesible',
    description: 'Interfaz simple pensada para productores y técnicos de campo.',
  },
];

export const impactCards = [
  {
    title: 'Campesinos como centro',
    description: 'Herramientas que empoderan al productor y respetan su experiencia.',
  },
  {
    title: 'Democratización tecnológica',
    description: 'Soluciones accesibles para pequeños y medianos productores.',
  },
  {
    title: 'Agricultura sostenible',
    description: 'Mejor uso del agua, menos químicos y menos desperdicio.',
  },
  {
    title: 'Replicabilidad',
    description: 'Base modular que puede escalar desde un invernadero piloto hasta una finca completa.',
  },
];

export const dashboard = {
  metrics: [
    {
      title: 'Temperatura',
      value: '28°C',
      subtitle: 'Zona media de invernadero',
      accent: 'from-orange-400 to-orange-500',
    },
    {
      title: 'Humedad',
      value: '68%',
      subtitle: 'Promedio de humedad relativa',
      accent: 'from-sky-400 to-sky-600',
    },
    {
      title: 'Luz',
      value: '14.2 lx',
      subtitle: 'Intensidad promedio diaria',
      accent: 'from-amber-300 to-amber-500',
    },
    {
      title: 'Suelo',
      value: '72%',
      subtitle: 'Humedad de suelo óptima',
      accent: 'from-emerald-400 to-emerald-600',
    },
  ],
  alerts: [
    {
      label: 'Clima',
      message: 'Temperatura en invernadero 3 llegando a umbral alto.',
      status: 'warning',
    },
    {
      label: 'Riego',
      message: 'Zona sur requiere ajuste de frecuencia en 2 horas.',
      status: 'info',
    },
    {
      label: 'Suelo',
      message: 'Humedad estable, se recomienda pause de fertirriego.',
      status: 'success',
    },
  ],
  trend: [
    { label: 'Lun', value: 46 },
    { label: 'Mar', value: 54 },
    { label: 'Mié', value: 50 },
    { label: 'Jue', value: 58 },
    { label: 'Vie', value: 62 },
    { label: 'Sáb', value: 59 },
    { label: 'Dom', value: 63 },
  ],
};
