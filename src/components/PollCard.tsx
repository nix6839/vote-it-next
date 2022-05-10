import styled from '@emotion/styled';
import Link from 'next/link';
import { PollSummary } from '../types';
import RelativeTime from './RelativeTime';

const PollSubject = styled.h2({
  lineHeight: 1.2,
  fontSize: '22px',
  fontWeight: 'bold',
  wordBreak: 'keep-all',
  textShadow: '-1px 0 #fff, 0 1px #fff, 1px 0 #fff, 0 -1px #fff',
  textAlign: 'center',
});

const ThumbnailHeader = styled.div<{ thumbnail?: string | null }>(
  {
    height: '200px',
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
    backgroundColor: 'transparent',
    isolation: 'isolate',

    '&::before': {
      opacity: 0.5,
      content: "''",
      display: 'block',
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      borderRadius: '10px 10px 0 0',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
  },
  ({ thumbnail }) => ({
    '&::before': {
      backgroundImage: `url('${thumbnail ?? 'poll-default-thumbnail.webp'}')`,
    },
  }),
);

const ParticipantCount = styled.p({
  fontSize: '20px',
  fontWeight: 'bold',
});

const Period = styled.p({
  fontSize: '18px',
});

const Author = styled.address({
  fontSize: '14px',
  fontStyle: 'normal',
  color: 'var(--text2)',
});

const MetaTopContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '4px',
});

const MetaContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '40px 10px',
  gap: '16px',
  flexGrow: 1,
});

const StyledPollCard = styled.article({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'var(--bg-poll-card)',
  boxShadow: '-2px -2px 4px #ececec, 3px 3px 8px #b8b8b8',
  borderRadius: '10px',
  transition: 'transform 0.5s',
  height: '100%',

  '&:hover': {
    transform: 'translateY(-8px)',
    backgroundColor: 'var(--bg-poll-card-hover)',
  },
});

type Props = {
  poll: PollSummary;
};

export default function PollCard({ poll }: Props) {
  return (
    <Link href={`/polls/${poll.id}`}>
      <StyledPollCard>
        <ThumbnailHeader thumbnail={poll.picture}>
          <PollSubject>{poll.subject}</PollSubject>
        </ThumbnailHeader>
        <MetaContainer>
          <MetaTopContainer>
            <ParticipantCount>
              참여인원 {poll.participatedCount}명
            </ParticipantCount>
            <Period>
              <RelativeTime dateTime={poll.createdAt} /> 시작
            </Period>
            {poll.expirationDate && (
              <Period>
                <RelativeTime dateTime={poll.expirationDate} /> 마감
              </Period>
            )}
          </MetaTopContainer>
          <Author className="author">{poll.author.nickname}</Author>
        </MetaContainer>
      </StyledPollCard>
    </Link>
  );
}
