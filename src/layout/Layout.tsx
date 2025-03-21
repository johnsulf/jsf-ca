import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

export interface ILayoutProps {}

export default function Layout(props: ILayoutProps) {
  return (
    <>
      <Header />
      <main className="min-h-[90svh]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
