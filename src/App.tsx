import './App.css'
import { Button, SimpleGrid, Show, Text,Grid, GridItem, Box, Heading, Flex, Menu, MenuButton, MenuItem, MenuList, IconButton } from '@chakra-ui/react'
import data from './data/experiences'
import ExperiencieContainer from './components/ExperienceContainer'
import ExperienceCard from './components/ExperienceCard'
import Banner from './components/Banner'
import CategoryList from './components/CategoryList'
import TechList from './components/TechList'
import { useEffect, useState } from 'react'
import { BsChevronDown } from 'react-icons/bs';
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function App() {
  data.data.sort((a, b) => b.id - a.id);
  const [experiences, setExperiences] = useState(data)
  const [selectedType, setSelectedType] = useState('Jobs')
  const [selectedTech, setSelectedTech] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

  useEffect(() => {
    const filteredData = data.data.filter(item => 
      (selectedTech ? item.tech_stack.includes(selectedTech) : true) &&
      (selectedCategory ? item.categories.includes(selectedCategory) : true) &&
      (selectedType==='All'?true:item.type===selectedType)
    );
      setExperiences({data: filteredData});
  }, [selectedTech, selectedCategory, selectedType])

  const reset = () => {
    setSelectedTech('')
    setSelectedCategory('')
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
        lg: `"200px 1fr"`
      }}
      >
        <Show above='lg'> 
          <GridItem   area={'aside'} paddingTop={'3rem'} paddingX={5}>
            <Button onClick={reset} backgroundColor={'gray.400'}>Remove Filters</Button>
            <CategoryList selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
            <TechList selectedTech={selectedTech} setSelectedTech={setSelectedTech}/>
          </GridItem> 
        </Show>
        <GridItem area={'main'}>
          <Box paddingLeft={10} paddingTop={10}>
          {/* <Flex flexDirection="column" justifyContent="start"> */}
            <Flex justifyContent={experiences.data.length>0?'space-between':'space-between'} marginBottom={5} marginRight={'5rem'}>
                <Heading> { experiences.data.length>1?selectedType + ' Experiences': 'There is no data to show. Try removing filters.'}</Heading>
                <Menu>
                  <MenuButton backgroundColor={'gray.300'} as={Button} rightIcon={<BsChevronDown/>}>{selectedType}</MenuButton>
                  <MenuList>
                    <MenuItem onClick={() => setSelectedType('Jobs')} value={'Jobs'}>Jobs</MenuItem>
                    <MenuItem onClick={() => setSelectedType('Education')} value={'Education'}>Education</MenuItem>
                    <MenuItem onClick={() => setSelectedType('All')} value={'All'}>All</MenuItem>
                  </MenuList>
              </Menu>
            </Flex>
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
      <Box  textAlign={'center'} bgGradient={'linear-gradient(180deg, rgba(226,232,240,1) 0%, gray.400 8%);'} top={0} backgroundColor={'gray.400'}>
      <Flex top={0} flexDirection="row" justifyContent={'space-evenly'} alignItems="center">
        <IconButton size={'sm'} as={FaLinkedin} color='gray.500' aria-label='Linkedin' variant={'link'}/>
        <Box >
        <IconButton size={'sm'} as={MdEmail} color='gray.500' aria-label='Email' variant={'link'}/>
          <Text>
            federico.belvedere@gmail.com
          </Text>
        </Box>
      </Flex>
    </Box>
      </>
  )
}

export default App


