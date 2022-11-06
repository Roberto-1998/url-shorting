import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
/* import './styles.css'; */
import { QueryClient, QueryClientProvider } from 'react-query';
import { GlobalStyle } from './components/GlobalStyle/GlobalStyle';

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <GlobalStyle />
    <App />
  </QueryClientProvider>,
  document.getElementById('app'),
);
