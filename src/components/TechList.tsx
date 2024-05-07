import { Button, Heading, HStack, List,Box ,ListItem, Icon } from '@chakra-ui/react'
import data from '../data/techStack'
import TechStack from '../entities/TechStack'

interface Props{
    experiencesHandler: (name: string) => void
}

export const TechList = ({experiencesHandler}: Props) => {

    return (
        <Box><Heading fontSize={'2xl'} marginBottom={'3'} marginTop={'4rem'}>Tech List</Heading>
        <List>
              {data?.data.map((tech) => <ListItem key={tech.id} paddingY='6px'>
                  <HStack>
                      <Icon boxSize={6} key={tech.id} as={TechStack[tech.name]} color='gray.500'/> 
                      <Button textAlign={'left'} whiteSpace={'normal'} fontSize={'lg'} variant='link' onClick={() => experiencesHandler(tech.name)}>{tech.name}</Button>
                  </HStack>
              </ListItem>)}
          </List>
          </Box>
      )
    }

export default TechList