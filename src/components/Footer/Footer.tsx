import * as React from 'react';

export interface IFooterProps {}

export default class Footer extends React.Component<IFooterProps> {
  public render() {
    return (
      <footer className="absolute bottom-0 w-full bg-blue-400 p-3 text-center text-white">
        <p>Copyright 2025</p>
      </footer>
    );
  }
}
