import React, {useState} from "react";
import { Container, Tabs, Tab, TabList, TabPanels, TabPanel, Box, Center, useColorModeValue } from "@chakra-ui/react";
import {Pomodoro, ShortBreak, LongBreak} from "./components/Timers/Timers";
import {Helmet} from 'react-helmet'
const MyTimer = ({bg, setTabIndex}) => {
  // console.log(tabIndex);
  return(
    <Box alignItems='center' mt='3' p='3' bg={bg} style={{ width: '500px', height: '300px' }}>
      <Center>
        <Tabs onChange={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Pomodoro</Tab>
          <Tab>Short Break</Tab>
          <Tab>Long Break</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Pomodoro />
          </TabPanel>
          <TabPanel>
            <ShortBreak />
          </TabPanel>
          <TabPanel>
          <LongBreak />
          </TabPanel>
        </TabPanels>
      </Tabs>
      </Center>
    </Box>
  )
}

const App = () => {
  const colors = useColorModeValue(
    ['red.200', 'teal.200', 'blue.200'],
    ['red.900', 'teal.900', 'blue.900'],
  )
  const bgColors = useColorModeValue(
    ['#F56565', '#38B2AC', '#4299E1'],
    ['red.900', 'teal.900', 'blue.900'],
  )
  const [tabIndex, setTabIndex] = useState(0)
  const bg = colors[tabIndex]
  const bodyBg = bgColors[tabIndex]

  return (
    <Container centerContent='true'>
      <Helmet>
        <style>{`body {background-color:${bodyBg};}`}</style>
      </Helmet>
      <MyTimer bg={bg} setTabIndex={setTabIndex}/>
    </Container>
  )
}



export default App;
