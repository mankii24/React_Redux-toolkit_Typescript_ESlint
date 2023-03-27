import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { store } from 'redux/store';
import { Provider } from 'react-redux';
// import userEvent from '@testing-library/user-event';
import Counter from './index';

function renderComponent() {
  render(
    <Provider store={store}>
      <Counter />
    </Provider>,
  );
}

describe('counter component', () => {
  test('renders learn react link', () => {
    // render(
    //   <Provider store={store}>
    //     <Counter />
    //   </Provider>,
    // );
    renderComponent();
    const linkElement = screen.getByText(/heading/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('display counter text', () => {
    renderComponent();

    expect(screen.getByTestId('counter-text')).toHaveTextContent('0');
  });

  test('increment counter', () => {
    renderComponent();

    const btnIncrement = screen.getByTestId('btn-increment');
    fireEvent.click(btnIncrement);

    expect(screen.getByTestId('counter-text')).toHaveTextContent('1');
  });

  test('decrement counter', () => {
    renderComponent();

    const btnDecrement = screen.getByTestId('btn-decrement');
    fireEvent.click(btnDecrement);

    expect(screen.getByTestId('counter-text')).toHaveTextContent('0');
  });
});
