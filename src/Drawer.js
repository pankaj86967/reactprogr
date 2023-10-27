import React, { useState } from 'react';

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDrawerClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ width: '200px', height: '200px', backgroundColor: 'black', marginTop: '10px' }}>
      <button onClick={handleDrawerClick}>{isOpen ? 'Close Drawer' : 'Open Drawer'}</button>
      {isOpen && (
        <div style={{ width: '200px', height: '200px', backgroundColor: 'lightgrey', marginTop: '10px' }}>
          {/* Your drawer content goes here */}
        </div>
      )}
    </div>
  );
};

export default Drawer;
