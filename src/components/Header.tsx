import profile from '../assets/svg/profile.svg';
import notifications from '../assets/svg/notifications.svg';

export const Header = () => {
  return (
    <div className="bg-bg-light h-10 flex gap-4 p-2 px-4 justify-end rounded-radius">
      <img
        src={notifications}
        className="hover:cursor-pointer"
        onClick={() => alert('раздел еще не создан')}
      />
      <img
        src={profile}
        className="hover:cursor-pointer"
        onClick={() => alert('раздел еще не создан')}
      />
    </div>
  );
};
