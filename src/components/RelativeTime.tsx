import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useMemo } from 'react';

dayjs.extend(relativeTime);
dayjs.extend(customParseFormat);

type TimeElement = JSX.IntrinsicElements['time'];

type Props = TimeElement & Required<Pick<TimeElement, 'dateTime'>>;

export default function RelativeTime(timeProps: Props) {
  const relativeTime = useMemo(
    () =>
      dayjs(timeProps.dateTime, 'YYYY-MM-DD[T]HH:mm:ss[.]SSS[Z]')
        .locale('ko')
        .fromNow(),
    [timeProps.dateTime],
  );
  return <time {...timeProps}>{relativeTime}</time>;
}
