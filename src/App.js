import React from "react";
import { useTimer } from 'react-timer-hook';
import { Button } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'

const MyTimer = ({expiriyTimestamp}) => {
  const { seconds,minutes,isRunning,start,pause,restart} = useTimer({expiriyTimestamp, onExpire: () => console.warn('onExpire called')});
  return(
    <>
    <div style={{ fontSize: '100px' }}>
      <span>{minutes}</span>:<span>{seconds}</span>
    </div>
    <p>{isRunning ? 'Running' : 'Not running'}</p>
      <Button onClick={start}>Start</Button>
      <Button onClick={pause}>Stop</Button>
      <Button onClick={() => {
        const time = new Date()
        time.setSeconds(time.getSeconds() + 300);
        restart(time)
      }}>Restart</Button>
    </>
  )
}

const App = () => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
  return (
    <Box>
      <MyTimer expiryTimestamp={time} />
    </Box>
  )
}



export default App;
