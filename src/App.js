import './App.scss';
import ParkingLot from './components/ParkingLot';
import { ParkingContextProvider } from './components/ParkingContext';

function App() {
  return (
    <ParkingContextProvider>
      <div className='App'>
        <ParkingLot />
      </div>
    </ParkingContextProvider>
  );
}

export default App;
