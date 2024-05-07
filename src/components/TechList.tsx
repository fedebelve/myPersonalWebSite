import { Button, Heading, HStack, List,Box ,ListItem, Text, Icon } from '@chakra-ui/react'
import { IconType } from 'react-icons'
import { BiSolidFileCss } from 'react-icons/bi'
import { FaPython, FaPhp, FaHtml5 } from 'react-icons/fa'
import { PiFileSql } from 'react-icons/pi'
import data from '../data/techStack'

interface Props{
    experiencesHandler: (name: string) => void
}

export const TechList = ({experiencesHandler}: Props) => {
    const iconMap: {[key: string]: IconType} = {
        python: FaPython,
        php: FaPhp,
        html: FaHtml5,
        css: BiSolidFileCss,
        sql: PiFileSql
    }

    return (
        <Box><Heading fontSize={'2xl'} marginBottom={'3'} marginTop={'4rem'}>Categories</Heading>
        <List>
              {data?.data.map((tech, index) => <ListItem key={tech.id} paddingY='6px'>
                  <HStack>
                      <Icon boxSize={6} key={tech.id} as={iconMap[tech.name]} color='gray.500'/> 
                      <Button textAlign={'left'} whiteSpace={'normal'} fontSize={'lg'} variant='link' onClick={() => experiencesHandler(tech.name)}>{tech.name}</Button>
                  </HStack>
              </ListItem>)}
          </List>
          </Box>
      )
    }

export default TechList