import React, { ButtonHTMLAttributes, ReactElement } from 'react';
import Button from './Button';

type ButtonElement = ButtonHTMLAttributes<HTMLButtonElement>;

type Props = {
  children: ReactElement;
} & Omit<ButtonElement, 'type' | 'aria-label' | 'children'> &
  Required<Pick<ButtonElement, 'aria-label'>>;

export default function IconButton({ children, ...buttonProps }: Props) {
  return (
    <Button {...buttonProps}>
      {React.cloneElement(children, {
        'aria-hidden': true,
      })}
    </Button>
  );
}
