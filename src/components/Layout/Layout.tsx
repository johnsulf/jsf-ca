import * as React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

export interface ILayoutProps {}

export default class Layout extends React.Component<ILayoutProps> {
  public render() {
    return (
      <>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </>
    );
  }
}
