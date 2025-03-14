import * as React from 'react';

export interface IFooterProps {
}

export default class Footer extends React.Component<IFooterProps> {
  public render() {
    return (
      <footer className='bg-dark text-light text-center p-3'>
        <p>Copyright 2025</p>
      </footer>
    );
  }
}
