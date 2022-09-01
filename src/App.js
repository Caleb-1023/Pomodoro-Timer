import React from "react";
import { useTimer } from 'react-timer-hook';
import { Box } from '@chakra-ui/react'

const MyTimer = ({expiriyTimestamp}) => {
  const { seconds,minutes,isRunning,start,pause} = useTimer({expiriyTimestamp, onExpire: () => console.warn('onExpire called')});
  return(
    <>
    <div style={{ fontSize: '100px' }}>
      <span>{minutes}</span>:<span>{seconds}</span>
    </div>
    <p>{isRunning ? 'Running' : 'Not running'}</p>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Stop</button>
    </>
  )
}

const App = () => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  )
}



export default App;
