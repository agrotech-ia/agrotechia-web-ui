export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0f766e',
        accent: '#2563eb',
        surface: '#f8fafc',
        neutral: '#334155'
      },
      boxShadow: {
        soft: '0 24px 65px rgba(15, 23, 42, 0.08)',
        card: '0 18px 45px rgba(15, 23, 42, 0.09)'
      }
    }
  },
  plugins: []
};
