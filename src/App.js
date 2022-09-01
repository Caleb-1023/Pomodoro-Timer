import React from "react";
import { useTimer } from 'react-timer-hook';
import { Button, Container, Flex } from '@chakra-ui/react'

const MyTimer = ({expiriyTimestamp}) => {
  const { seconds,minutes,isRunning,start,pause,restart} = useTimer({expiriyTimestamp, onExpire: () => console.warn('onExpire called')});
  return(
    <>
    <div style={{ fontSize: '100px' }}>
      <span>{minutes}</span>:<span>{seconds}</span>
    </div>
    <p>{isRunning ? 'Running' : 'Not running'}</p>
    <Flex gap='3'> 
      <Button colorScheme='green' onClick={start}>Start</Button>
      <Button colorScheme='red' onClick={pause}>Stop</Button>
      <Button colorScheme='blue' onClick={() => {
        const time = new Date()
        time.setSeconds(time.getSeconds() + 300);
        restart(time)
      }}>Restart</Button>
    </Flex>
    </>
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
