import { Box, BoxProps } from '@chakra-ui/react';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import dayjsCustomParseFormat from 'dayjs/plugin/customParseFormat';
import dayjsRelativeTime from 'dayjs/plugin/relativeTime';
import { TimeHTMLAttributes, useMemo } from 'react';

dayjs.extend(dayjsRelativeTime);
dayjs.extend(dayjsCustomParseFormat);

type Props = TimeHTMLAttributes<HTMLTimeElement> &
  Required<Pick<TimeHTMLAttributes<HTMLTimeElement>, 'dateTime'>> &
  BoxProps;

export default function RelativeTime(timeProps: Props) {
  const { dateTime } = timeProps;

  const relativeTime = useMemo(
    () =>
      dayjs(dateTime, 'YYYY-MM-DD[T]HH:mm:ss[.]SSS[Z]').locale('ko').fromNow(),
    [dateTime],
  );
  return (
    <Box as="time" {...timeProps}>
      {relativeTime}
    </Box>
  );
}
