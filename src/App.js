import React from "react";
import { Container, Tabs, Tab, TabList, TabPanels, TabPanel } from "@chakra-ui/react";
import {Pomodoro, ShortBreak, LongBreak} from "./components/Timers/Timers";
// import ShortBreak from "./components/ShortBreak/ShortBreak";

const MyTimer = () => {
  return(
    <>
      <Tabs>
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
    </>
  )
}

const App = () => {
  return (
    <Container centerContent='true' bg='gray.200' p='3' alignItems='center' mt='3' style={{ width: '500px', height: '300px' }}>
      <MyTimer />
    </Container>
  )
}



export default App;
