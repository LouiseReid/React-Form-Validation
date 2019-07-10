import { Router } from '@reach/router';
import React from 'react';
import { Provider } from 'react-redux';
import Nav from './components/Nav';
import CustomerDetail from './pages/CustomerDetail';
import Form from './pages/Form';
import Home from './pages/Home';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Nav />
      <Router>
        <Home path="/" />
        <Form path="/addcustomer" />
        <CustomerDetail path="/customer/:id" />
      </Router>
    </Provider>

  );
}

export default App;
