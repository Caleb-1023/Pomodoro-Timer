import React from "react";
import { useTimer } from 'react-timer-hook';
import { Button, Box, Container, Flex, Text, Center } from '@chakra-ui/react'

const MyTimer = ({expiriyTimestamp}) => {
  const { seconds,minutes,isRunning,start,pause,restart} = useTimer({expiriyTimestamp, onExpire: () => console.warn('onExpire called')});
  return(
    <Box bg='gray.200' p='3' alignItems='center' mt='3'>

    <Center style={{ fontSize: '100px', alignItems: 'center' }}>
      <span>{minutes}</span>:<span>{seconds}</span>
    </Center>

    <Box textAlign='center' py='3'>
    <Text>{isRunning ? 'Running' : 'Not running'}</Text>
    </Box>

    <Flex gap='3'> 
      <Button colorScheme='green' onClick={start}>Start</Button>
      <Button colorScheme='red' onClick={pause}>Stop</Button>
      <Button colorScheme='blue' onClick={() => {
        const time = new Date()
        time.setSeconds(time.getSeconds() + 300);
        restart(time)
      }}>
        Restart
      </Button>
    </Flex>

    </Box>
  )
}

const App = () => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
  return (
    <Container centerContent = 'true'>
      <MyTimer expiryTimestamp={time} />
    </Container>
  )
}



export default App;
