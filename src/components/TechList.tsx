import { Button, Heading, HStack, List,Box ,ListItem, Icon } from '@chakra-ui/react'
import data from '../data/techStack'
import TechStack from '../entities/TechStack'

interface Props{
    setSelectedTech: (name: string) => void,
    selectedTech: string
}

export const TechList = ({selectedTech,setSelectedTech}: Props) => {

    return (
        <Box><Heading fontSize={'2xl'} marginBottom={'3'} marginTop={'4rem'}>Tech List</Heading>
        <List>
              {data?.data.map((tech) => <ListItem key={tech.id} paddingY='6px'>
                  <HStack>
                      <Icon boxSize={6} key={tech.id} as={TechStack[tech.name]} color='gray.500'/> 
                      <Button textAlign={'left'} whiteSpace={'normal'} fontSize={'lg'} fontWeight={selectedTech===tech.name?'bold':'normal'} variant='link' onClick={() => setSelectedTech(tech.name)}>{tech.name}</Button>
                  </HStack>
              </ListItem>)}
          </List>
          </Box>
      )
    }

export default TechList