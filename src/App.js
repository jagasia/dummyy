import './App.css';
import AirlineComponent from './components/AirlineComponent';
import { AirlineForm } from './components/AirlineForm';
import Dummy from './components/dummy1';

function App() {
  return (
    <div>
      <div className='row'>
        <div className='col-md-4'>

        </div>
        <div className='col-md-4'>
          <Dummy />
        </div>
        <div className='col-md-4'>

        </div>
      </div>
      <div className='row'>
        <div className='col-md-2'>

        </div>
        <div className='col-md-8'>
        <AirlineComponent />
        </div>
        <div className='col-md-2'>

        </div>
      </div>
      
    </div>
  );
}

export default App;
