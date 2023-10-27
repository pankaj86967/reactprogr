import React, { useState } from 'react';

const App = () => {
  const [currentBackground, setCurrentBackground] = useState(0);
  const backgrounds = ['yellow', 'green', 'blue']; 

  const changeBackground = () => {
    setCurrentBackground((currentBackground + 1) % backgrounds.length);
  };

  return (
    <div
      style={{
        backgroundColor: backgrounds[currentBackground],
        width: '100vw',
        height: '100vh',
      }}
    >
      <button onClick={changeBackground}>Change Background</button>
    </div>
  );
};

export default App;
