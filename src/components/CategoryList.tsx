import { Button, Heading, HStack, List,Box ,ListItem, Text } from '@chakra-ui/react'
import data from '../data/categories'
import CategoryMap from '../entities/CategoryMap'

interface Props{
    setSelectedCategory: (name: string) => void,
    selectedCategory: string
}

export const CategoryList = ({selectedCategory, setSelectedCategory}:Props) => {
    return (
        <Box><Heading fontSize={'2xl'} marginBottom={'3'} marginTop={'4rem'}>Categories</Heading>
        <List>
              {data?.data.map((category, index) => <ListItem key={category.id} paddingY='6px'>
                  <HStack>
                      <Text key={index}>{CategoryMap[category.icon_name]}</Text>
                      <Button textAlign={'left'} whiteSpace={'normal'} fontSize={'lg'} fontWeight={category.name===selectedCategory?'bold':'normal'} variant='link' onClick={() =>setSelectedCategory(category.name)}>{category.name}</Button>
                  </HStack>
              </ListItem>)}
          </List>
          </Box>
      )
    }

export default CategoryList