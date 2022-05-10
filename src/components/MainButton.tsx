import styled from '@emotion/styled';
import Button from './Button';

const MainButton = styled(Button)({
  backgroundColor: 'var(--main-color)',
  borderRadius: '16px',
  color: 'var(--text-bg-main)',
  '&:hover': {
    backgroundColor: 'var(--main-color-hover)',
  },
});

export default MainButton;
