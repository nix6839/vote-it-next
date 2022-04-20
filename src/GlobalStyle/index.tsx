import { createGlobalStyle } from 'styled-components';
import PretendardFont from './PretendardFont';
import ResetStyle from './ResetStyle';
import Theme from './Theme';

export default createGlobalStyle`
  ${Theme}
  ${PretendardFont}
  ${ResetStyle}
`;
