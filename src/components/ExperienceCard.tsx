import { Card, CardBody, Heading, HStack, Icon, Image, Spacer, Text } from '@chakra-ui/react'
import Experience from '../entities/Experience'
import codigo from '../assets/codigo.gif'
import chart from '../assets/chart2.jpg'
import CategoryIconList from './CategoryIconList'
import TechEmojiList from './TechEmojiList'
import { RiArrowRightDoubleLine } from "react-icons/ri";

interface Props{
    experience: Experience
}

const ImageMap: {[key: string]: string} = { //le digo que no se preocupe por la key, porque esos names van a cumplir la funcion
    codigo: codigo,
    chart: chart
}

function ExperienceCard({ experience }: Props) {
  return (
    <Card borderRadius={10} overflow={'hidden'} shadow='none' >
        <Image src={ImageMap[experience.image_name]}></Image>
        <CardBody>
            <HStack marginBottom={3} justifyContent={'space-between'}>
                <CategoryIconList categories={experience.categories} />
            </HStack>
            <HStack marginBottom={3} justifyContent={'space-between'}>
                <TechEmojiList techStack={experience.tech_stack} />
            </HStack>
            <HStack overflow={'visible'}>
                <Text as='em' fontSize={'sm'}>{experience.organization}</Text>
                <Spacer/>
                <Text as='em' fontSize={'sm'}>{experience.start_date}</Text>
                <Icon as={RiArrowRightDoubleLine} color='gray.500'/>
                <Text as='em' fontSize={'sm'}>{experience.end_date}</Text>
            </HStack>
            <Heading fontSize={'2xl'}>
                {experience.title}
                {/* <Emoji rating={experience.rating_top}/> */}
            </Heading>
            <Text>
                {experience.description}
            </Text>
        </CardBody>
    </Card>
  )
}

export default ExperienceCard