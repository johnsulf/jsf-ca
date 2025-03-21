import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

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
