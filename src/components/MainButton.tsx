import styled from '@emotion/styled';
import Button from './Button';

const MainButton = styled(Button)`
  background-color: var(--main-color);
  border-radius: 16px;
  color: var(--text-bg-main);
  &:hover {
    background-color: var(--main-color-hover);
  }
`;

export default MainButton;
