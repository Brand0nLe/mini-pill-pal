import React from 'react';
import Alert from './Alert';

interface AlertManagerProps {
  alerts: { id: number; message: string }[];
}

const AlertManager: React.FC<AlertManagerProps> = ({ alerts }) => {
  return (
    <div>
      {alerts.map(alert => (
        <Alert
          key={alert.id}
          message={alert.message}
          onClose={() => console.log('Close alert')}
        />
      ))}
    </div>
  );
};

export default AlertManager;
