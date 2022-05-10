import { css } from '@emotion/react';

const getFontFace = (weight: number, suffix: string) => ({
  '@font-face': {
    fontFamily: 'Pretendard',
    fontWeight: weight,
    fontDisplay: 'swap',
    src: `local('Pretendard ${suffix}'),
          url('https://unpkg.com/pretendard@1.2.2/dist/web/static/woff2/Pretendard-${suffix}.woff2')
            format('woff2'),
          url('https://unpkg.com/pretendard@1.2.2/dist/web/static/woff/Pretendard-${suffix}.woff')
            format('woff')`,
  },
});

const fontWeights: [number, string][] = [
  [400, 'Regular'],
  [700, 'Bold'],
];

export default css(
  fontWeights.map(([weight, suffix]) => getFontFace(weight, suffix)),
);
