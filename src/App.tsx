import React, { useEffect } from 'react';
import { initializeScorm, getScormData, setScormData, finishScorm } from './scorm';

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
      <header className="App-header">
        <h1 className="text-3xl font-bold underline bg-orange-600">
          <div className="text-pretty font-extrabold bg-slate-500"> 
            Welcome to My PWA with SCORM and Tailwind CSS! 
          </div>
        </h1>
      </header>
    </div>
  );
}

export default App;
