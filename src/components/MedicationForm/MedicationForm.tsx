import React, { useState } from 'react';

interface MedicationFormProps {
  onAddMedication: (medication: MedicationData) => void;
}

interface MedicationData {
  name: string;
  strength: string;
  directions: string;
}

const MedicationForm: React.FC<MedicationFormProps> = ({ onAddMedication }) => {
  const [name, setName] = useState('');
  const [strength, setStrength] = useState('');
  const [directions, setDirections] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const medicationData: MedicationData = {
      name,
      strength,
      directions
    };
    onAddMedication(medicationData);
    setName('');
    setStrength('');
    setDirections('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="border border-gray-300 rounded w-full py-2 px-3"
          type="text"
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="strength">
          Strength
        </label>
        <input
          className="border border-gray-300 rounded w-full py-2 px-3"
          type="text"
          id="strength"
          value={strength}
          onChange={e => setStrength(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="directions">
          Directions
        </label>
        <textarea
          className="border border-gray-300 rounded w-full py-2 px-3"
          id="directions"
          value={directions}
          onChange={e => setDirections(e.target.value)}
        />
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        type="submit"
      >
        Add Medication
      </button>
    </form>
  );
};

export default MedicationForm;
