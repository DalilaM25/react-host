import mail from '../assets/mail.svg';
import phone from '../assets/phone.svg';

const spanStyles = 'text-xs text-text-light font-button';
const contacts = [
  { name: 'mail', icon: mail, styles: spanStyles, info: 'front.dev.spb@gmail.com'},
  { name: 'phone', icon: phone, styles: spanStyles, info: '+7(901)611-90-19' },
];

export const Footer = () => {
  return (
    <div className="bg-bg-light h-16 flex justify-between rounded-radius p-2">
      <div className="flex flex-col">
        <span className={spanStyles}>
          Это приложение - объединение большинства современных frontend-инструментов.
        </span>
        <span className={spanStyles}>
          Внимание: не является советом к выбору стека в коммерческой разработке
          (Лучше выбрать что-то одно)!
        </span>
        <span className={spanStyles}>
          Автор: Михайлова Дарья
        </span>
      </div>
      <div className="flex flex-col gap-1">
        {contacts.map((contact) => (
          <div className="flex items-center gap-2" key={contact.name}>
            <img src={contact.icon} className="w-5" />
            <span className={contact.styles}>{contact.info}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
