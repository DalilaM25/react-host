type TButtonProps = {
  handleClick: () => void;
  text: string;
  styles: string;
  icon?: string;
};
export const Button = ({ handleClick, text, styles, icon }: TButtonProps) => {
  return (
    <button className={styles} onClick={handleClick}>
      {icon && <img src={icon} />}
      <span>{text}</span>
    </button>
  );
};
