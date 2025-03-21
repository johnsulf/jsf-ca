import { Menubar } from 'primereact/menubar';

export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
  return (
    <header>
      <Menubar start="Online Shop" />
    </header>
  );
}
