import * as React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export interface ILayoutProps {
}

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
