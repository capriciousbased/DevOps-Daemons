import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { BrowserRouter } from 'react-router-dom';
import { Home } from '../Home';

jest.mock('react-slick', () => ({
  __esModule: true,
  default: () => null,
}));
const MockHome = () => {
    return (
        <BrowserRouter>
          <Home />
        </BrowserRouter>
    )
}
describe('Home component', () => {
  it('renders without crashing', () => {
    const view = ReactDOMServer.renderToString(<MockHome />);
    expect(view).toBeDefined();
  });
});
