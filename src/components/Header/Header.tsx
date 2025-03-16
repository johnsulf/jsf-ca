import { Menubar } from 'primereact/menubar';
import * as React from 'react';

export interface IHeaderProps {}

export default class Header extends React.Component<IHeaderProps> {
  public render() {
    return (
      <header>
        <Menubar start="Online Shop" />
      </header>
    );
  }
}
