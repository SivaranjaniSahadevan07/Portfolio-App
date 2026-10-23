import { fireEvent, render, screen, within } from '@testing-library/react';
import App from './App';

test('renders the portfolio and its social links', () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: /mern stack developer/i })).toBeInTheDocument();
  const footer = within(screen.getByRole('contentinfo'));
  expect(footer.getByRole('link', { name: 'GitHub' })).toHaveAttribute('href', 'https://github.com/SivaranjaniSahadevan07');
  expect(footer.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', 'https://www.linkedin.com/in/sivaranjani-s-775593202/');
  expect(footer.getByRole('link', { name: 'YouTube' })).toHaveAttribute('href', 'https://www.youtube.com/@codewithsr07');
});

test('smoothly scrolls to the selected section', () => {
  render(<App />);
  const projectsSection = document.getElementById('projects');
  const scrollTo = jest.spyOn(window, 'scrollTo').mockImplementation(() => {});
  const expectedTop = Math.max(
    0,
    window.scrollY + projectsSection.getBoundingClientRect().top - document.querySelector('.navbar').getBoundingClientRect().height
  );

  fireEvent.click(screen.getByRole('link', { name: 'Projects' }));

  expect(scrollTo).toHaveBeenCalledWith({ top: expectedTop, behavior: 'smooth' });
  expect(window.location.hash).toBe('#projects');
  scrollTo.mockRestore();
});
