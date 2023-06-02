import React, { useState } from 'react';
import RefillTrackerForm from './RefillTrackerForm';

const RefillTracker: React.FC = () => {
  const [pillCount, setPillCount] = useState(0);

  const handleRefill = (count: number) => {
    setPillCount(prevCount => prevCount + count);
  };

  return (
    <div className="my-4">
      <h2 className="text-lg font-bold mb-2">Refill Tracker</h2>
      <p>Pill Count: {pillCount}</p>
      <RefillTrackerForm onRefill={handleRefill} />
    </div>
  );
};

export default RefillTracker;
