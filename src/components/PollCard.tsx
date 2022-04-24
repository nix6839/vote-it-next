import styled from 'styled-components';
import { PollSummary } from '../types';
import LinkTo from './LinkTo';
import RelativeTime from './RelativeTime';

const PollSubject = styled.h2`
  line-height: 1.2;
  font-size: 22px;
  font-weight: bold;
  word-break: keep-all;
  text-shadow: -1px 0 #fff, 0 1px #fff, 1px 0 #fff, 0 -1px #fff;
  text-align: center;
`;

const ThumbnailHeader = styled.div<{ thumbnail?: string | null }>`
  height: 200px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: transparent;
  isolation: isolate;

  &::before {
    opacity: 0.5;
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    border-radius: 10px 10px 0 0;

    ${({ thumbnail }) =>
      thumbnail == null
        ? `background-image: url('/poll-default-thumbnail.webp');`
        : `background-image: url('${thumbnail}');`}
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`;

const ParticipantCount = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

const Period = styled.p`
  font-size: 18px;
`;

const Author = styled.address`
  font-size: 14px;
  font-style: normal;
  color: var(--text2);
`;

const MetaTopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
`;

const MetaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 10px;
  gap: 16px;
  justify-content: space-between;
  flex-grow: 1;
`;

const StyledPollCard = styled.article`
  display: flex;
  flex-direction: column;
  background-color: var(--bg-poll-card);
  box-shadow: -2px -2px 4px #ececec, 3px 3px 8px #b8b8b8;
  border-radius: 10px;
  transition: transform 0.5s;
  height: 100%;

  &:hover {
    transform: translateY(-8px);
    background-color: var(--bg-poll-card-hover);
  }
`;

type Props = {
  poll: PollSummary;
};

export default function PollCard({ poll }: Props) {
  return (
    <LinkTo href={`/polls/${poll.id}`}>
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
    </LinkTo>
  );
}