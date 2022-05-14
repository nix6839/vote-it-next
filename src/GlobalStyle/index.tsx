import { Global } from '@emotion/react';
import Font from './Font';
import Theme from './Theme';

export default function GlobalStyle() {
  return <Global styles={[Theme, Font]} />;
}
