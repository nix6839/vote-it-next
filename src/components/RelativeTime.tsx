import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import dayjsCustomParseFormat from 'dayjs/plugin/customParseFormat';
import dayjsRelativeTime from 'dayjs/plugin/relativeTime';
import { useMemo } from 'react';

dayjs.extend(dayjsRelativeTime);
dayjs.extend(dayjsCustomParseFormat);

type TimeElement = JSX.IntrinsicElements['time'];

type Props = TimeElement & Required<Pick<TimeElement, 'dateTime'>>;

export default function RelativeTime(timeProps: Props) {
  const { dateTime } = timeProps;

  const relativeTime = useMemo(
    () =>
      dayjs(dateTime, 'YYYY-MM-DD[T]HH:mm:ss[.]SSS[Z]').locale('ko').fromNow(),
    [dateTime],
  );
  return <time {...timeProps}>{relativeTime}</time>;
}
