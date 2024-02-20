import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import Home from './components/Home/Home';
import store from './store';

import './styles/index.scss';

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ChakraProvider>
        <Home />
      </ChakraProvider>
    </BrowserRouter>
  </Provider>
);
