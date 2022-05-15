import { extendTheme, theme as chakraTheme } from '@chakra-ui/react';

const fonts =
  "Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif";

export default extendTheme({
  colors: {
    brand: {
      50: '#eaefff',
      100: '#c6ceee',
      200: '#a3addd',
      300: '#7f8ccd',
      400: '#5b6bbd',
      500: '#4252a4',
      600: '#324080',
      700: '#242d5d',
      800: '#141b3b',
      900: '#04091a',
    },
    text: {
      primary: chakraTheme.colors.gray[800],
      secondary: '#808080',
    },
    bg: {
      body: '#f8f8f8',
      header: '#fff',
      poll_card: {
        default: '#fff',
        hover: '#e7e7e7',
      },
    },
  },

  fonts: {
    heading: fonts,
    body: fonts,
  },

  styles: {
    global: {
      body: {
        color: 'text.primary',
        bg: 'bg.body',
      },
    },
  },
});
