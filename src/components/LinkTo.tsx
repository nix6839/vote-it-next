import Link, { LinkProps } from 'next/link';
import { AnchorHTMLAttributes } from 'react';

export type LinkToProps = Omit<LinkProps, 'passHref'> &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>;

export default function LinkTo({
  children,
  href,
  as,
  replace,
  scroll,
  shallow,
  prefetch,
  locale,
  ...aProps
}: LinkToProps) {
  return (
    <Link
      {...{ href, as, replace, scroll, shallow, prefetch, locale }}
      passHref
    >
      <a {...aProps}>{children}</a>
    </Link>
  );
}
