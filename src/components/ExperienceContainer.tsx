import { Box } from '@chakra-ui/react'
import {ReactNode } from 'react'

interface Props {
    children: ReactNode
}

function ExperiencieContainer({children}: Props) {
  return (
    <Box backgroundColor={'white'} borderRadius={10} border={'1px'} boxShadow={'md'} borderColor={'gray.300'} overflow={'hidden'} _hover={{transform: 'scale(1.03)', transition: 'transform .15s ease-in'}}>
        {children}
    </Box>
  )
}

export default ExperiencieContainer