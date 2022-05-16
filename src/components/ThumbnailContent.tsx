import { Flex, FlexProps } from '@chakra-ui/react';

type ThumbnailContentOptions = {
  thumbnail?: string | null;
};

type Props = FlexProps & ThumbnailContentOptions;

export default function ThumbnailContent({
  thumbnail = undefined,
  children,
  ...props
}: Props) {
  return (
    <Flex
      position="relative"
      height="200px"
      backgroundColor="transparent"
      isolation="isolate"
      _before={{
        opacity: 0.5,
        content: "''",
        display: 'block',
        position: 'absolute',
        left: 0,
        top: 0,
        width: 'full',
        height: 'full',
        zIndex: -1,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url('${thumbnail ?? 'poll-default-thumbnail.webp'}')`,
      }}
      {...props}
    >
      {children}
    </Flex>
  );
}
