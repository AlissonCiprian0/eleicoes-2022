import { useEffect } from 'react';
import TSEService from './services/TSE';
import './App.css';

TSEService.getResults();

function App() {
  useEffect(() => {
    console.log('Lulindo: ', TSEService.candidates.lulindo);
  }, []);

  return (
    <div className='App'>
      <h1>Eleições 2022</h1>
    </div>
  );
}

export default App;
