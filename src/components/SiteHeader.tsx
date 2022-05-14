import {
  Box,
  Button,
  Container,
  HStack,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import * as Icon from 'phosphor-react';
import SignUpModal from './SignUpModal';

export default function SiteHeader() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        as="header"
        position="sticky"
        top={0}
        backgroundColor="var(--bg-header)"
        boxShadow="lg"
        zIndex="var(--z-index-header)"
      >
        <Container paddingY={1} maxWidth="container.xl">
          <HStack justifyContent="space-between" spacing={0}>
            <Link href="/">
              <Image
                src="/header-logo-light.webp"
                alt="사이트 로고"
                width={80}
                height={32}
              />
            </Link>
            <HStack spacing={1}>
              <IconButton
                aria-label="테마 변경"
                variant="ghost"
                isRound
                padding={1}
                // colorScheme="var(--main-color)"
              >
                <Icon.Sun size={20} weight="fill" color="#fcd404" />
              </IconButton>
              <HStack spacing={1}>
                <Button padding={3} variant="ghost">
                  로그인
                </Button>
                <Button
                  padding={3}
                  variant="solid"
                  borderRadius="full"
                  onClick={onOpen}
                  // colorScheme="var(--main-color-hover)"
                >
                  회원가입
                </Button>
              </HStack>
            </HStack>
          </HStack>
        </Container>
      </Box>
      <SignUpModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}
