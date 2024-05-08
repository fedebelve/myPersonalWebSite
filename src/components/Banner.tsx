import { AspectRatio, Center, Stack, Heading, Highlight, Box, Image, Text } from "@chakra-ui/react"
import video from '/src/assets/programming.mp4'
import yop from '/src/assets/yop2.png'

function Banner() {
    return (
    <AspectRatio maxH={'20rem'} ratio={4 / 3}>
      <Box>
        <video style={{ position: 'absolute', filter: 'brightness(40%)' }} loop muted autoPlay src={video} />
        <Box position="absolute" padding={'3.5rem'}>
          <Center>
            <Image
              // position="absolute"
              top="0"
              right="0"
              bottom="0"
              left="0"
              borderRadius='full'
              // boxSize='150px'
              src={yop}
              objectFit='cover'
              alt='Federico Belvedere'
              boxSize={'15rem'}
              filter='grayscale(80%)' />
            <Stack overflow={'hidden'}>
              <Heading color={'gray.100'} fontWeight={'bold'}>Who is Federico Belvedere?</Heading>
              <Text color={'gray.200'} fontSize={['sm', 'sm', 'md', 'xl']} pr='5rem'>
                I am an <Highlight styles={{ px: '2', py: '1', rounded: 'full', bg: 'gray.100' }} query={['Information Systems Engineer', 'UTN', 'customer needs', 'delve into the code']}>Information Systems Engineer, graduated from the National Technology University (UTN), one of Argentina’s finest institutions.I have a passion for technology projects.My natural inclination is to be close to the business side, understanding processes and customer needs.However, my curiosity also drives me to delve into the code and comprehend what’s happening beneath the surface.Fortunately, I’m not just limited to that.Join me, and you’ll see what I mean.</Highlight></Text>
            </Stack>
          </Center>
        </Box>
      </Box>
    </AspectRatio>
    )
  }

  export default Banner