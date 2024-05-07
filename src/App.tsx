import './App.css'
import { Button, SimpleGrid, Show, Grid, GridItem, Box, Heading } from '@chakra-ui/react'
import data from './data/experiences'
import ExperiencieContainer from './components/ExperienceContainer'
import ExperienceCard from './components/ExperienceCard'
import Banner from './components/Banner'
import CategoryList from './components/CategoryList'
import TechList from './components/TechList'
import { useState } from 'react'

  function App() {

  const [experiences, setExperiences] = useState(data)
  // const [selectedTech, setSelectedTech] = useState('')
  // const [selectedCategory, setSelectedCategory] = useState('')

  const experienceHandler = (name: string) => {
    const filteredData = data.data.filter(item => item.categories.includes(name));
    setExperiences({data: filteredData});
  }

  const experienceHandlerTech = (name: string) => {
    const filteredData = data.data.filter(item => item.tech_stack.includes(name));
    setExperiences({data: filteredData});
  }

  const reset = () => {
    setExperiences(data);
  }

  return (
    <>
       <Banner/>
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
        <Show above='lg'> 
          <GridItem   area={'aside'} paddingTop={'3rem'} paddingX={5}>
            <Button onClick={reset} backgroundColor={'gray.400'}>Remove Filters</Button>
            <CategoryList experiencesHandler={experienceHandler}/>
            <TechList experiencesHandler={experienceHandlerTech}/>
          </GridItem> 
        </Show>
        <GridItem area={'main'}>
          <Box paddingLeft={10} paddingTop={10}>
            <Heading>Experiences</Heading>
            {/* <Flex marginBottom={5}>
              <Box marginRight={5}>

              </Box>
            </Flex> */}
          </Box>
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        paddingX="2rem"
        paddingBottom={"3rem"}
        paddingTop={"1rem"}
        spacing={6}>
            {experiences.data.map((exp,index) => <ExperiencieContainer key={index}><ExperienceCard experience={exp}/></ExperiencieContainer>)}
          </SimpleGrid>
        </GridItem>
      </Grid> 
      </>
  )
}

export default App


