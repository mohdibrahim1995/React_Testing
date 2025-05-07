import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
// test('renders js and save to reload', () => {
//   render(<App />);
//   // const linkElement = screen.getByText(/ and save to reload/i);
//   const linkElement = screen.linkElement('https://reactjs.org')
//   expect(linkElement).to;
// });
