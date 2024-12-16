import { render, screen } from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom'
import App from './App';


test("should have two links in navigation", () => {
  render(<MemoryRouter><App /></MemoryRouter>);

  const headerAnchors = screen.getAllByRole('link');
  expect(headerAnchors).toHaveLength(2);

  const linksText = headerAnchors.map((link) => link.textContent);
  // console.log({linksText})
  expect(linksText).toEqual(['Home', 'Other Page'])
})
