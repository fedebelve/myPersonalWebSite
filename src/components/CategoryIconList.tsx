import { HStack, Icon, Text } from '@chakra-ui/react'

interface Props {
    categories: string[]
}

const CategoryIconList = ({categories}: Props) => {
    const CategoryMap: {[key: string]: string} = { 
        front: '🖼️',
        back: '⚙️',
        machineLearning: '🤖',
        management: '👔',
        bi: '📊',
        course: '🧑‍🎓',
        teacher: '👨‍🏫',
    }

    return (
    <HStack marginY={1} >
     {categories.map((category,index) => ( <Text key={index}>{CategoryMap[category]}</Text> ))}
    </HStack>
  )
}
export default CategoryIconList