import React, { useState } from 'react';
import RefillTrackerForm from './RefillTrackerForm';

interface RefillTrackerProps {
  medicationList: Medication[];
}

interface Medication {
  name: string;
  strength: string;
  directions: string;
}

const RefillTracker: React.FC<RefillTrackerProps> = ({ medicationList }) => {
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
