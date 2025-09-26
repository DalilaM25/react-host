import { Button } from './Button';
import logo from '/logo.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { BtnStyles } from '../helpers/style-constants';
import { SidebarButtons } from '../helpers/constants';

export const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string): boolean => {
    return location.pathname.startsWith(path);
  };

  return (
    <div className="bg-bg-light w-[20vw] p-4 rounded-radius flex flex-col gap-2">
      <div
        className="flex gap-4 mb-5 hover:cursor-pointer"
        onClick={() => navigate('/')}
      >
        <img src={logo} alt="логотип" />
        <h1 className="font-title text-xl ">MultiHub</h1>
      </div>
      {SidebarButtons.map((button) => (
        <Button
          key={button.name}
          haldleClick={() => navigate(button.path)}
          text={button.text}
          icon={button.icon}
          styles={`${BtnStyles} ${
            isActive(button.path) ? 'bg-accent-lilo-light' : 'bg-transparent'
          }`}
        />
      ))}
    </div>
  );
};
