import React from 'react';
import Clock from './components/Clock';
import Geolocation from './components/Geolocation';
import './App.css';

//TypeScript doesn't allow function declarations to be 'typed' (given a data type), but it does allow arrow function expressions to be typed. We need to change 'function' to 'const'. Then, we dig into our import 'React' - which digs specifically into the @types node module package
const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <div className="verticalCenter">
        <Clock />
        <Geolocation />
      </div>
    </div>
  );
}

export default App;
