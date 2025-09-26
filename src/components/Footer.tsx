import { FOOTER_CONTACTS } from '../helpers/constants';
import { spanStyles } from '../helpers/style-constants';

export const Footer = () => {
  return (
    <div className="bg-bg-light h-20 flex justify-between rounded-radius p-2">
      <div className="flex flex-col">
        <span className={spanStyles}>
          Это приложение - объединение большинства современных
          frontend-инструментов.
        </span>
        <span className={spanStyles}>
          Внимание: не является советом к выбору стека в коммерческой разработке
          (Лучше выбрать что-то одно)!
        </span>
        <span className={spanStyles}>Автор: Михайлова Дарья</span>
      </div>
      <div className="flex flex-col gap-1">
        {FOOTER_CONTACTS.map((contact) => (
          <a
            className="flex items-center gap-2"
            key={contact.name}
            href={contact.href}
            target="_blank"
          >
            <img src={contact.icon} className="w-5" />
            <span className={contact.styles}>{contact.info}</span>
          </a>
        ))}
      </div>
    </div>
  );
};
