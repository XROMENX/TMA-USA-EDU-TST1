/* eslint-disable react/no-deprecated */
import   'react';
import ReactDOM from 'react-dom';
import App from './App';

// eslint-disable-next-line no-undef
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
