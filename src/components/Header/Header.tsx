import * as React from 'react';
import { Menubar } from 'primereact/menubar';
        

export interface IHeaderProps {
}

export default class Header extends React.Component<IHeaderProps> {
  public render() {
    return (
      <header>
        <Menubar start="Online Shop" />
      </header>
    );
  }
}
