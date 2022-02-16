import React, { useState, useEffect } from 'react';
import ParkingSpace from './ParkingSpace';

import ParkingEntry from './ParkingEntry';

// import ParkingContextProvider from './ParkingContext';

import { useParking } from './ParkingContext';

function ParkingLot() {
  const parkingData = useParking();
  const [parkingSpaces, setParkingSpaces] = useState(
    parkingData.map((parkingSpace) => {
      return (
        <ParkingSpace
          size={parkingSpace.size}
          key={parkingSpace.key}
          index={parkingSpace.key}
          filled={parkingSpace.filled}
        />
      );
    })
  );
  // const [parkingLotStatus, setParkingLotStatus] = useState(parkingData);
  // const [parkingPayment, setParkingPayments] = useState([]);

  // useEffect(() => {
  //   console.log(parkingData);
  //   setParkingLotStatus(parkingData);
  // }, [parkingData]);

  useEffect(() => {
    console.log(parkingData);
    setParkingSpaces(
      parkingData.map((parkingSpace) => {
        return (
          <ParkingSpace
            size={parkingSpace.size}
            key={parkingSpace.key}
            index={parkingSpace.key}
            filled={parkingSpace.filled}
          />
        );
      })
    );
  }, [parkingData]);

  return (
    <div className='parking-lot'>
      <ParkingEntry />

      <div className='parking-lot__entrance'>
        <div className='wall'></div>
        <span>1</span>
        <div className='wall'></div>
        <span>2</span>
        <div className='wall'></div>
        <span>3</span>
        <div className='wall'></div>
      </div>

      <div className='parking-lot__spaces'>
        {/* {parkingData.map((parkingSpace) => {
          return (
            <ParkingSpace
              size={parkingSpace.size}
              key={parkingSpace.key}
              index={parkingSpace.key}
              filled={parkingSpace.filled}
            />
          );
        })} */}

        {parkingSpaces}
      </div>
    </div>
  );
}

export default ParkingLot;
