import React from 'react'
import { Button, Box, Flex, Center } from '@chakra-ui/react'
import { useTimer } from 'react-timer-hook';


export const Pomodoro = ({expiriyTimestamp}) => {
    const { seconds, minutes, start, pause, restart } = useTimer({ expiriyTimestamp, onExpire: () => console.warn('onExpire called') });
  return (
      <Box >

          <Center color='gray.700' style={{ fontSize: '100px', fontWeight: '600', alignItems: 'center' }}>
              <Box as='span'>{minutes}</Box>:<Box as='span'>{seconds}</Box>
          </Center>

          <Flex gap='3' justify='center'>
              <Button colorScheme='green' onClick={start}>Continue</Button>
              <Button colorScheme='red' onClick={pause}>Stop</Button>
              <Button colorScheme='blue' onClick={() => {
                  const time = new Date()
                  time.setSeconds(time.getSeconds() + 1500);
                  restart(time)
              }}>
                  Start
              </Button>
          </Flex>

      </Box>
  )
}

export const ShortBreak = ({ expiriyTimestamp }) => {
    const { seconds, minutes, start, pause, restart } = useTimer({ expiriyTimestamp, onExpire: () => console.warn('onExpire called') });
    return (
        <Box >

            <Center color='gray.700' style={{ fontSize: '100px', fontWeight: '600', alignItems: 'center' }}>
                <Box as='span'>{minutes}</Box>:<Box as='span'>{seconds}</Box>
            </Center>

            <Flex gap='3' justify='center'>
                <Button colorScheme='green' onClick={start}>Continue</Button>
                <Button colorScheme='red' onClick={pause}>Stop</Button>
                <Button colorScheme='blue' onClick={() => {
                    const time = new Date()
                    time.setSeconds(time.getSeconds() + 300);
                    restart(time)
                }}>
                    Start
                </Button>
            </Flex>

        </Box>
    )
}

export const LongBreak = ({ expiriyTimestamp }) => {
    const { seconds, minutes, start, pause, restart } = useTimer({ expiriyTimestamp, onExpire: () => console.warn('onExpire called') });
    return (
        <Box >

            <Center color='gray.700' style={{ fontSize: '100px', fontWeight: '600', alignItems: 'center' }}>
                <Box as='span'>{minutes}</Box>:<Box as='span'>{seconds}</Box>
            </Center>

            <Flex gap='3' justify='center'>
                <Button colorScheme='green' onClick={start}>Continue</Button>
                <Button colorScheme='red' onClick={pause}>Stop</Button>
                <Button colorScheme='blue' onClick={() => {
                    const time = new Date()
                    time.setSeconds(time.getSeconds() + 900);
                    restart(time)
                }}>
                    Start
                </Button>
            </Flex>

        </Box>
    )
}
