import React, { useState, useContext } from 'react';
import * as data from '../pseudoData';

const ParkingContext = React.createContext();
const ParkingSpaceContext = React.createContext();

export const useParking = () => {
  return useContext(ParkingContext);
};

export const useParkingSpace = () => {
  return useContext(ParkingSpaceContext);
};

export function ParkingContextProvider({ children }) {
  const [parkingLotStatus, setParkingLotStatus] = useState(data.PARKING_STATUS);

  const changeParkingStatus = (key) => {
    setParkingLotStatus((prevStatus) => {
      const newStatus = [...prevStatus];
      newStatus[key] = {
        ...newStatus[key],
        filled: !newStatus[key].filled,
      };

      return newStatus;
    });
  };

  return (
    <ParkingContext.Provider value={parkingLotStatus}>
      <ParkingSpaceContext.Provider value={changeParkingStatus}>
        {children}
      </ParkingSpaceContext.Provider>
    </ParkingContext.Provider>
  );
}
