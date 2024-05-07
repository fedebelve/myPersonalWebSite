import { HStack, Icon } from '@chakra-ui/react'
import TechMap from '../entities/TechStack'

interface Props {
    techStack: string[]
}

const TechEmojiList = ({techStack}: Props) => {

    return (
    <HStack marginY={1} >
     {techStack.map((tech) => (<Icon key={tech} as={TechMap[tech]} color='gray.500' boxSize={7}/> ))}
    </HStack>
  )
}

export default TechEmojiList