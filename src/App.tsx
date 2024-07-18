import React, { useEffect } from 'react';
import { initializeScorm, getScormData, setScormData, finishScorm } from './lib/scorm';
import { Header } from './components/Header';
import data from './data/data.json'

const App: React.FC = () => {
  useEffect(() => {
    if (initializeScorm()) {
      const completionStatus = getScormData('cmi.core.lesson_status');
      console.log(`Completion Status: ${completionStatus}`);

      setScormData('cmi.core.lesson_status', 'completed');
    }

    return () => {
      finishScorm();
    };
  }, []);

  return (
    <div className="App">
       <Header title={data.title} />
    </div>
  );
}

export default App;