import React, { useEffect } from 'react';
import { initializeScorm, getScormData, setScormData, finishScorm } from './lib/scorm';
import { Home } from './pages';

export function App(){
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
       <Home/>
    </div>
  );
}
