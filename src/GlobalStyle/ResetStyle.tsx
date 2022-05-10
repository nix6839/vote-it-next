import { css } from '@emotion/react';

// eslint-disable-next-line @emotion/syntax-preference
export default css`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: inherit;
    color: inherit;
  }

  body {
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
      Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo',
      'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', sans-serif;
    line-height: 1.5;
    background-color: var(--bg-page);
    color: var(--text1);
  }

  #__next {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  code,
  pre,
  samp,
  var {
    font-family: 'JetBrains Mono NL', 'JetBrains Mono', D2Coding, monospace;
  }

  ul {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
