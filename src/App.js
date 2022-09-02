import React, {useState} from "react";
import { Container, Tabs, Tab, TabList, TabPanels, TabPanel, Box, Center, useColorModeValue } from "@chakra-ui/react";
import {Pomodoro, ShortBreak, LongBreak} from "./components/Timers/Timers";
import {Helmet, HelmetProvider} from 'react-helmet-async'

const MyTimer = ({bg, setTabIndex}) => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600);

  return(
    <Box alignItems='center' mt='3' p='3' bg={bg} style={{ width: '700px', height: '300px' }} borderRadius='lg'>
      <Center>
        <Tabs onChange={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Pomodoro</Tab>
          <Tab>Short Break</Tab>
          <Tab>Long Break</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Pomodoro expiriyTimestamp={time}/>
          </TabPanel>
          <TabPanel>
            <ShortBreak expiriyTimestamp={time}/>
          </TabPanel>
          <TabPanel>
          <LongBreak expiriyTimestamp={time}/>
          </TabPanel>
        </TabPanels>
      </Tabs>
      </Center>
    </Box>
  )
}

const App = () => {
  const colors = useColorModeValue(
    ['red.300', 'teal.300', 'blue.300'],
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
      <HelmetProvider>
      <Helmet>
        <style>{`body {background-color:${bodyBg};}`}</style>
      </Helmet>
      </HelmetProvider>
      <MyTimer bg={bg} setTabIndex={setTabIndex}/>
    </Container>
  )
}



export default App;
