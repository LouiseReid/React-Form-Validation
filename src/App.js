import { Router } from '@reach/router';
import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
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
        <Home path={process.env.PUBLIC_URL + '/'} />
        <Form path={process.env.PUBLIC_URL + '/customerform'} />
        <UpdateForm path={process.env.PUBLIC_URL + '/customerform/:id/update'} />
        <CustomerDetail path={process.env.PUBLIC_URL + '/customer/:id'} />
      </Router>
    </Provider>

  );
}

export default App;
