import React from 'react';
import Alert from './Alert';

interface AlertModalProps {
  isOpen: boolean;
  toggleModal: () => void;
  alerts: { id: number; message: string }[];
}

const AlertModal: React.FC<AlertModalProps> = ({ isOpen, toggleModal, alerts }) => {
  return (
    <div className={`modal ${isOpen ? 'block' : 'hidden'}`}>
      <div className="modal-overlay" onClick={toggleModal}></div>
      <div className="modal-content">
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-lg font-bold mb-4">Alerts</h2>
          {alerts.map(alert => (
            <Alert
              key={alert.id}
              message={alert.message}
              onClose={() => console.log('Close alert')}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlertModal;
