import './App.css'
import { HStack, Stack, Text, List, Image, 
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList, Flex, Heading, Spacer, Button, ButtonGroup, Box, Divider, Center, AspectRatio, Highlight, SimpleGrid, Show, Grid, GridItem } from '@chakra-ui/react'

import data from './data/experiences'
import ExperiencieContainer from './components/ExperienceContainer'
import ExperienceCard from './components/ExperienceCard'
import Banner from './components/Banner'
import CategoryList from './components/CategoryList'
import TechList from './components/TechList'
import { useState } from 'react'

  function App() {
  const { innerWidth: width, innerHeight: height } = window;
  const [experiences, setExperiences] = useState(data)
  const [selectedTech, setSelectedTech] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

  const experienceHandler = (name: string) => {
    console.log(name,"ADFSDF")
    console.log(data)
    const filteredData = data.data.filter(item => item.categories.includes(name));
    setExperiences({data: filteredData});
  }

  const experienceHandlerTech = (name: string) => {
    console.log(name,"ADFSDF")
    console.log(data)
    const filteredData = data.data.filter(item => item.tech_stack.includes(name));
    setExperiences({data: filteredData});
  }

  const reset = () => {
    setExperiences(data);
  }

  return (
    
    <Box backgroundColor={'gray.200'} height={height}>
      <Banner/>
      {/* <Box backgroundColor={'black'}  color={'gray.100'}>
        <Flex justifyContent={'space-evenly'} borderBottom={'medium'} padding={'0.6rem'} minWidth='max-content' alignItems='center' gap='2'>
            <Button color={'gray.200'} background={'None'}>Home</Button>
            <Center height='2.5rem'>
              <Divider orientation='vertical' />
            </Center>
            <Button color={'gray.200'} background={'None'}>Projects</Button>
            <Center height='2.5rem'>
              <Divider orientation='vertical' />
            </Center>
            <Button color={'gray.200'} background={'None'}>Hobbies</Button>
        </Flex>
      </Box> */}
      <Grid bgGradient={'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(226,232,240,1) 1%);'}
      templateAreas={{
        base:`"main"`,
        lg: `"aside main"`
        }}
        templateColumns= {{
          base: '1fr',
          lg: '200px 1fr'
        }}
        >
        {/* con SHOW -> indico que solo rendreize en pantallas por encima de lg */}
        <Show above='lg'> 
          <GridItem   area={'aside'} paddingTop={'5rem'} paddingX={5}>
            <Button onClick={reset}>Remove Filters</Button>
            <CategoryList experiencesHandler={experienceHandler}/>
            <TechList experiencesHandler={experienceHandlerTech}/>
          </GridItem> 
        </Show>
        <GridItem  area={'main'}>
          {/* <Box paddingLeft={10} >
            <Flex marginBottom={5}>
              <Box marginRight={5}>
              </Box>
            </Flex>
          </Box> */}
        <SimpleGrid  padding={'3rem'} columns={3} spacing={10}>
          {experiences.data.map((exp,index) => <ExperiencieContainer key={index}><ExperienceCard experience={exp}/></ExperiencieContainer>)}
        </SimpleGrid>
        </GridItem>
      </Grid>
      </Box>
  )
}

export default App


