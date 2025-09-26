import { Button } from './Button';
import logo from '/logo.svg';
import dashboard from '../assets/dashboard.svg';
import autor from '../assets/autor.svg';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


const BtnStyles = `font-button text-lg text-text-light p-2 rounded-radius w-full flex gap-2 
    transition-all duration-300 ease-in-out 
    hover:bg-accent-lilo-light hover:shadow-glow`

const buttons = [
  { name: 'dashboard', text: 'Дашборд', icon: dashboard, path: '/dashboard' },
  { name: 'something1', text: 'хз что', icon: dashboard, path: '/dashboard' },
  { name: 'something2', text: 'от автора', icon: autor, path: '/autor' },
]

export const Sidebar = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string): boolean => {
    return location.pathname.startsWith(path)
  }

  return (
    <div className="bg-bg-light w-[20vw] p-4 rounded-radius flex flex-col gap-2">
      <div className="flex gap-4 mb-5">
        <img src={logo} alt="логотип" />
        <h1 className="font-title text-xl ">MultiHub</h1>
      </div>
      {buttons.map((button) => (
        <Button 
          key={button.name}
          haldleClick={() => navigate(button.path)} 
          text={button.text} 
          icon={button.icon}
          styles={`${BtnStyles} ${
            isActive(button.path)
              ? 'bg-accent-lilo-light' 
              : 'bg-transparent'
          }`} 
        />
      ))}
    </div>
  )
}