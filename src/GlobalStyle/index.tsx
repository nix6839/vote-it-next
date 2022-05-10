import { Global } from '@emotion/react';
import PretendardFont from './PretendardFont';
import ResetStyle from './ResetStyle';
import Theme from './Theme';
import ZIndex from './ZIndex';

export default <Global styles={[Theme, ZIndex, PretendardFont, ResetStyle]} />;
