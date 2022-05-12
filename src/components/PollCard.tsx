import { Heading, Text, VStack } from '@chakra-ui/react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { PollSummary } from '../types';
import RelativeTime from './RelativeTime';

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

type Props = {
  poll: PollSummary;
};

export default function PollCard({ poll }: Props) {
  return (
    <Link href={`/polls/${poll.id}`}>
      <VStack
        spacing={0}
        alignItems="stretch"
        backgroundColor="var(--bg-poll-card)"
        boxShadow="-2px -2px 4px #ececec, 3px 3px 8px #b8b8b8"
        borderRadius={10}
        transition="transform 0.5s"
        height="full"
        _hover={{
          transform: 'translateY(-8px)',
          backgroundColor: 'var(--bg-poll-card-hover)',
        }}
      >
        <ThumbnailHeader thumbnail={poll.picture}>
          <Heading
            as="h2"
            fontSize="2xl"
            wordBreak="keep-all"
            textAlign="center"
            textShadow="-1px 0 #fff, 0 1px #fff, 1px 0 #fff, 0 -1px #fff"
          >
            {poll.subject}
          </Heading>
        </ThumbnailHeader>
        <VStack
          spacing={4}
          justifyContent="space-between"
          padding="40px 10px"
          flexGrow={1}
        >
          <VStack spacing={1}>
            <Text fontWeight="bold" fontSize="xl">
              참여인원 {poll.participatedCount}명
            </Text>
            <Text fontSize="lg">
              <RelativeTime dateTime={poll.createdAt} /> 시작
            </Text>
            {poll.expirationDate && (
              <Text fontSize="lg">
                <RelativeTime dateTime={poll.expirationDate} /> 마감
              </Text>
            )}
          </VStack>
          <Text
            as="address"
            fontSize="sm"
            fontStyle="normal"
            color="var(--text2)"
            className="author"
          >
            {poll.author.nickname}
          </Text>
        </VStack>
      </VStack>
    </Link>
  );
}
