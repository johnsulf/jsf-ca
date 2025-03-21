import { Badge } from 'primereact/badge';
import { InputText } from 'primereact/inputtext';
import { MegaMenu } from 'primereact/megamenu';
import { useNavigate } from 'react-router-dom';

export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
  const itemRenderer = (item: {
    icon: string;
    label: string;
    badge?: string;
    shortcut?: string;
  }) => (
    <a className="align-items-center p-menuitem-link flex">
      <span className={item.icon} />
      <span className="mx-2">{item.label}</span>
      {item.badge && <Badge className="ml-auto" value={item.badge} />}
      {item.shortcut && (
        <span className="border-1 surface-border border-round surface-100 ml-auto p-1 text-xs">
          {item.shortcut}
        </span>
      )}
    </a>
  );
  const navigate = useNavigate();
  const items = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      command: () => navigate('/'),
    },
    {
      label: 'Contact',
      icon: 'pi pi-envelope',
      command: () => navigate('/contact'),
    },
  ];

  const end = (
    <div className="align-items-center flex gap-2">
      <InputText
        placeholder="Search products"
        type="text"
        className="p-2 sm:w-auto"
      />
    </div>
  );

  return (
    <header>
      <MegaMenu
        model={items}
        end={end}
        breakpoint="640px"
        className="sm m-2 rounded-3xl bg-slate-50 px-4 shadow-lg"
      />
    </header>
  );
}
