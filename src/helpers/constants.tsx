import mail from '@/assets/svg/mail.svg';
import phone from '../assets/svg/phone.svg';
import telegram from '../assets/svg/telegram.svg';
import dashboard from '../assets/svg/dashboard.svg';
import autor from '../assets/svg/autor.svg';
import { spanStyles } from './style-constants';

export const FOOTER_CONTACTS = [
  {
    name: 'mail',
    icon: mail,
    styles: spanStyles,
    info: 'front.dev.spb@gmail.com',
    href: 'https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=front.dev.spb@gmail.com',
  },
  {
    name: 'phone',
    icon: phone,
    styles: spanStyles,
    info: '+7(901)611-90-19',
    href: 'tel:+79016119019',
  },
  {
    name: 'telegram',
    icon: telegram,
    styles: spanStyles,
    info: '@frontdevspb',
    href: 'https://t.me/frontdevspb',
  },
];

export const SIDEBAR_BUTTONS = [
  { name: 'dashboard', text: 'Дашборд', icon: dashboard, path: '/dashboard' },
  { name: 'something1', text: 'хз что', icon: dashboard, path: '/hz' },
  { name: 'something2', text: 'от автора', icon: autor, path: '/autor' },
];
