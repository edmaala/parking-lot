import React, { useEffect } from 'react';
import { AiOutlineCar } from 'react-icons/ai';
import { useStopwatch } from 'react-timer-hook';
import { Button } from 'antd';

/*
 * expected props:
 * size: set parking space size
 *  values = small || mid || large
 *
 * filled: set if parking space has a car parked in it
 *  values = true || false
 */

function ParkingSpace({ size, filled, index }) {
  const { seconds, minutes, hours, isRunning, start, pause, reset } =
    useStopwatch({ autoStart: false });

  useEffect(() => {
    if (filled) start();

    if (!filled) {
      reset();
      pause();
    }
  }, [filled]);

  return (
    <div className={`parking-space ${filled ? 'filled' : ''} ${index}`}>
      <div className={`car-park ${size}`}>
        <AiOutlineCar
          className={`car-icon ${size} ${filled ? 'filled' : ''} `}
        />
      </div>

      <div className='parking-space__actions'>
        <Button className='action-btn'> Leave </Button>
        <Button className='action-btn'> Reserve Space </Button>
      </div>

      <div className='parking-space__timer'>
        <span>
          {hours < 10 && '0'}
          {hours}
        </span>{' '}
        :{' '}
        <span>
          {minutes < 10 && '0'}
          {minutes}
        </span>{' '}
        :{' '}
        <span>
          {seconds < 10 && '0'}
          {seconds}
        </span>
      </div>
    </div>
  );
}

export default ParkingSpace;
