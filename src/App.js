import { Router } from '@reach/router';
import React from 'react';
import { Provider } from 'react-redux';
import Nav from './components/Nav';
import CustomerDetail from './pages/CustomerDetail';
import Form from './pages/Form';
import Home from './pages/Home';
import UpdateForm from './pages/UpdateForm';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Nav />
      <Router>
        <Home path="/" />
        <Form path="/customerform" />
        <UpdateForm path="/customer/:id/update" />
        <CustomerDetail path="/customer/:id" />
      </Router>
    </Provider>

  );
}

export default App;
