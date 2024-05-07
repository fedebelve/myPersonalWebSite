import { Button, Heading, HStack, List,Box ,ListItem, Text } from '@chakra-ui/react'
import data from '../data/categories'
import CategoryMap from '../entities/CategoryMap'

interface Props{
    experiencesHandler: (name: string) => void
}

export const CategoryList = ({experiencesHandler}:Props) => {
    return (
        <Box><Heading fontSize={'2xl'} marginBottom={'3'} marginTop={'4rem'}>Categories</Heading>
        <List>
              {data?.data.map((category, index) => <ListItem key={category.id} paddingY='6px'>
                  <HStack>
                      <Text key={index}>{CategoryMap[category.icon_name]}</Text>
                      <Button textAlign={'left'} whiteSpace={'normal'} fontSize={'lg'} variant='link' onClick={() =>experiencesHandler(category.name)}>{category.name}</Button>
                  </HStack>
              </ListItem>)}
          </List>
          </Box>
      )
    }

export default CategoryList