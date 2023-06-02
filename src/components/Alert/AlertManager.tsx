import React, { useState } from 'react';
import AlertModal from './AlertModal';

interface Alert {
  id: number;
  message: string;
}

const AlertManager: React.FC = () => {
  const [alerts, setAlerts] = useState<Alert[]>([]);

  const addAlert = (message: string) => {
    const newAlert: Alert = {
      id: Date.now(),
      message: message,
    };
    setAlerts((prevAlerts) => [...prevAlerts, newAlert]);
  };

  const removeAlert = (id: number) => {
    setAlerts((prevAlerts) => prevAlerts.filter((alert) => alert.id !== id));
  };

  return (
    <>
      {alerts.map((alert) => (
        <AlertModal key={alert.id} message={alert.message} onClose={() => removeAlert(alert.id)} />
      ))}
    </>
  );
};

export default AlertManager;
