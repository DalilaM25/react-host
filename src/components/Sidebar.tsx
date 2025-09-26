import { Button } from './Button';
import logo from '/logo.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { BtnStyles } from '../helpers/style-constants';
import { SIDEBAR_BUTTONS } from '../helpers/constants';
import { useCallback } from 'react';

export const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string): boolean => {
    return location.pathname.startsWith(path);
  };

  const handleLogoClick = useCallback(() => navigate('/'), [navigate]);
  const handleButtonClick = useCallback(
    (path: string) => () => navigate(path),
    [navigate]
  );
  return (
    <div className="bg-bg-light min-w-64 p-4 rounded-radius flex flex-col gap-2">
      <div
        className="flex gap-4 mb-5 hover:cursor-pointer"
        onClick={handleLogoClick}
      >
        <img src={logo} alt="логотип" />
        <h1 className="font-title text-xl ">MultiHub</h1>
      </div>
      {SIDEBAR_BUTTONS.map((button) => (
        <Button
          key={button.name}
          handleClick={handleButtonClick(button.path)}
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
