import React, { useState } from 'react';

const MedicationForm: React.FC = () => {
  const [medicationName, setMedicationName] = useState('');
  const [medicationStrength, setMedicationStrength] = useState('');
  const [medicationDirections, setMedicationDirections] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
    console.log({
      medicationName,
      medicationStrength,
      medicationDirections
    });
    // Clear form inputs
    setMedicationName('');
    setMedicationStrength('');
    setMedicationDirections('');
  };

  return (
    <div className="my-4">
      <h2 className="text-lg font-bold mb-2">Medication Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="medicationName">
            Medication Name
          </label>
          <input
            className="border border-gray-300 rounded w-full py-2 px-3"
            type="text"
            id="medicationName"
            value={medicationName}
            onChange={e => setMedicationName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="medicationStrength">
            Medication Strength
          </label>
          <input
            className="border border-gray-300 rounded w-full py-2 px-3"
            type="text"
            id="medicationStrength"
            value={medicationStrength}
            onChange={e => setMedicationStrength(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="medicationDirections">
            Medication Directions
          </label>
          <textarea
            className="border border-gray-300 rounded w-full py-2 px-3"
            id="medicationDirections"
            value={medicationDirections}
            onChange={e => setMedicationDirections(e.target.value)}
            required
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          type="submit"
        >
          Save Medication
        </button>
      </form>
    </div>
  );
};

export default MedicationForm;
