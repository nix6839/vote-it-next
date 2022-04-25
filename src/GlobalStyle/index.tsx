import { createGlobalStyle } from 'styled-components';
import PretendardFont from './PretendardFont';
import ResetStyle from './ResetStyle';
import Theme from './Theme';
import ZIndex from './ZIndex';

export default createGlobalStyle`
  ${Theme}
  ${ZIndex}
  ${PretendardFont}
  ${ResetStyle}
`;
