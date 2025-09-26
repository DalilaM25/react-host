type TButtonProps = {
  haldleClick: () => void;
  text: string;
  styles: string;
  icon?: string;
};
export const Button = ({ haldleClick, text, styles, icon }: TButtonProps) => {
  return (
    <button className={styles} onClick={haldleClick}>
     {icon && <img src={icon}/>}
     <span>{text}</span> 
    </button>
  );
};
