import { Heading, Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import { PollSummary } from '../types';
import RelativeTime from './RelativeTime';
import ThumbnailContent from './ThumbnailContent';

type Props = {
  poll: PollSummary;
};

export default function PollCard({ poll }: Props) {
  return (
    <Link href={`/polls/${poll.id}`}>
      <VStack
        spacing={0}
        alignItems="stretch"
        backgroundColor="bg.poll_card.default"
        boxShadow="-2px -2px 4px #ececec, 3px 3px 8px #b8b8b8"
        borderRadius={10}
        transition="transform 0.5s"
        height="full"
        _hover={{
          transform: 'translateY(-8px)',
          backgroundColor: 'bg.poll_card.hover',
        }}
      >
        <ThumbnailContent
          thumbnail={poll.picture}
          alignItems="center"
          justifyContent="center"
          padding={2}
        >
          <Heading
            as="h2"
            fontSize="2xl"
            wordBreak="keep-all"
            textAlign="center"
            textShadow="-1px 0 #fff, 0 1px #fff, 1px 0 #fff, 0 -1px #fff"
          >
            {poll.subject}
          </Heading>
        </ThumbnailContent>
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
            color="text.secondary"
            className="author"
          >
            {poll.author.nickname}
          </Text>
        </VStack>
      </VStack>
    </Link>
  );
}
