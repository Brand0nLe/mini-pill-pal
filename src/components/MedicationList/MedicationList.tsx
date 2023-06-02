import React from 'react';

interface Medication {
  name: string;
  strength: string;
  directions: string;
}

interface MedicationListProps {
  medicationList: Medication[];
}

const MedicationList: React.FC<MedicationListProps> = ({ medicationList }) => {
  return (
    <div>
      <h2>Medication List</h2>
      {medicationList.length > 0 ? (
        <ul>
          {medicationList.map((medication, index) => (
            <li key={index}>
              <div>
                <strong>Name:</strong> {medication.name}
              </div>
              <div>
                <strong>Strength:</strong> {medication.strength}
              </div>
              <div>
                <strong>Directions:</strong> {medication.directions}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No medications added yet.</p>
      )}
    </div>
  );
};

export default MedicationList;
