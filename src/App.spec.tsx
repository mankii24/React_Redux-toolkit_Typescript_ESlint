import { render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { store } from 'redux/store';
import { Provider } from 'react-redux';
import App from './App';

test('full app rendering/navigating', async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    { wrapper: BrowserRouter },
  );
  // screen.debug();
  expect(screen.getByText(/This is the home page/i)).toBeInTheDocument();
});

test('landing on a bad page', () => {
  const badRoute = '/some/bad/route';
  render(
    <MemoryRouter initialEntries={[badRoute]}>
      <App />
    </MemoryRouter>,
  );

  expect(screen.getByText(/wrong url/i)).toBeInTheDocument();
});
