import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeComponent from './pages/home'
import OrdersComponent from './pages/orders'
import TariffsComponent from './pages/tariffs'
import ContactsComponent from './pages/contacts'
import { Header } from './components/header'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Header />

    <Routes>
      <Route index element={<HomeComponent />} />
      <Route path="/orders" element={<OrdersComponent />} />
      <Route path="/tariffs" element={<TariffsComponent />} />
      <Route path="/contacts" element={<ContactsComponent />} />
      {/*<Route path='*' element={<NotFound />} />*/}
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
