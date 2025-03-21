import { Route, Routes } from 'react-router-dom';
import Layout from '../layout/Layout';
import HomePage from '../pages/HomePage/HomePage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/product/:id" />
        <Route path="/cart" />
        <Route path="/checkout-success" />
        <Route path="/contact" />
      </Route>
    </Routes>
  );
}
