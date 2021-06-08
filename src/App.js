import { useEffect } from 'react';
import './App.css';

function App() {
  window.OneSignal = window.OneSignal || [];
  const OneSignal = window.OneSignal;

  useEffect(() => {
    OneSignal.push(() => {
      OneSignal.init(
        {
          appId: "5a6f35cf-46b7-4d06-bd3e-378af082872f"
        }
      )
    });
  }, []);

  return (
    <div className="App">
      Hello From OneSignal
    </div>
  );
}

export default App;
