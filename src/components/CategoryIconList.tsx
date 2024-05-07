import { HStack, Text } from '@chakra-ui/react'
import CategoryMap from '../entities/CategoryMap'

interface Props {
    categories: string[]
}

const CategoryIconList = ({categories}: Props) => {
    return (
    <HStack marginY={1} >
     {categories.map((category,index) => ( <Text key={index}>{CategoryMap[category]}</Text> ))}
    </HStack>
  )
}
export default CategoryIconList