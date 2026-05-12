import { render, screen } from '@testing-library/react';
import App from './App';

describe('AgroTechIA landing', () => {
  it('renders the main brand and hero message', () => {
    render(<App />);
    expect(screen.getByText(/AgroTechIA/i)).toBeTruthy();
    expect(screen.getByText(/Invernaderos inteligentes para productores del futuro/i)).toBeTruthy();
  });
});
