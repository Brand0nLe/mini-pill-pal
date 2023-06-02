import React, { useState } from 'react';

interface RefillTrackerFormProps {
  onRefill: (count: number) => void;
}

const RefillTrackerForm: React.FC<RefillTrackerFormProps> = ({ onRefill }) => {
  const [count, setCount] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const refillCount = parseInt(count);
    if (!isNaN(refillCount)) {
      onRefill(refillCount);
      setCount('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="count">
          Refill Count
        </label>
        <input
          className="border border-gray-300 rounded w-full py-2 px-3"
          type="text"
          id="count"
          value={count}
          onChange={e => setCount(e.target.value)}
          required
        />
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        type="submit"
      >
        Refill
      </button>
    </form>
  );
};

export default RefillTrackerForm;
