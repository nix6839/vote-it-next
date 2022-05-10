import styled from '@emotion/styled';
import React, { ButtonHTMLAttributes, ReactElement } from 'react';
import Button from './Button';

const StyledButton = styled(Button)`
  display: inline-flex;
`;

type ButtonElement = ButtonHTMLAttributes<HTMLButtonElement>;

type Props = {
  children: ReactElement;
} & Omit<ButtonElement, 'type' | 'aria-label' | 'children'> &
  Required<Pick<ButtonElement, 'aria-label'>>;

export default function IconButton({ children, ...buttonProps }: Props) {
  return (
    <StyledButton type="button" {...buttonProps}>
      {React.cloneElement(children, {
        'aria-hidden': true,
      })}
    </StyledButton>
  );
}
