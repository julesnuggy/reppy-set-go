import { ReactElement } from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
  children: ReactElement;
  className: string;
};

const Button = ({ children, className }: ButtonProps): ReactElement => (
  <button className={`${styles.button} ${className}`}>{children}</button>
);

export default Button;
