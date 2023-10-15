import { ReactElement } from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
  children: ReactElement | string;
  onClick: () => void;
  className?: string;
};

const Button = ({ children, className, onClick }: ButtonProps): ReactElement => (
  <button className={`${styles.button} ${className}`} onClick={onClick}>{children}</button>
);

export default Button;
