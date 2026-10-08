import React from 'react';
import { useShop } from '../context/ShopContext';
import { CheckCircle2, Info, AlertTriangle } from 'lucide-react';

const Toast = () => {
  const { toast } = useShop();

  if (!toast.visible) return null;

  return (
    <div className="toast-container">
      <div className="toast">
        {toast.type === 'success' && <CheckCircle2 size={20} color="#10B981" />}
        {toast.type === 'info' && <Info size={20} color="#3B82F6" />}
        {toast.type === 'warning' && <AlertTriangle size={20} color="#F59E0B" />}
        <span>{toast.message}</span>
      </div>
    </div>
  );
};

export default Toast;
