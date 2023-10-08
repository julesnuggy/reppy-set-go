import { ReactNode } from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
  children: ReactNode;
  className: string;
}

const Button = ({ children, className }: ButtonProps) =>
  <button className={`${styles.button} ${className}`}>{children}</button>;

export default Button;
