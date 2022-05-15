import { Global } from '@emotion/react';

const getFontFace = (weight: number, suffix: string) => ({
  '@font-face': {
    fontFamily: 'Pretendard',
    fontWeight: weight,
    fontDisplay: 'swap',
    src: `
      local('Pretendard ${suffix}'),
        url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@1.3.0/dist/web/static/woff2/Pretendard-${suffix}.woff2')
          format('woff2'),
        url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@1.3.0/dist/web/static/woff/Pretendard-${suffix}.woff')
          format('woff')
    `,
  },
});

const fontWeights: [number, string][] = [
  [400, 'Regular'],
  [700, 'Bold'],
];

export default function Fonts() {
  return (
    <Global
      styles={fontWeights.map(([weight, suffix]) =>
        getFontFace(weight, suffix),
      )}
    />
  );
}
