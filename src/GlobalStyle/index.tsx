import { Global } from '@emotion/react';
import Font from './Font';
import Theme from './Theme';
import ZIndex from './ZIndex';

export default function GlobalStyle() {
  return <Global styles={[Theme, ZIndex, Font]} />;
}
