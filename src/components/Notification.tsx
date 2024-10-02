/* eslint-disable max-len */
import { Check, Error, Info, Warning } from '@/assets/Icons';
import { t } from 'i18n-js';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface INotification {
  info: (message: string | string[], autoClose?: number) => void;
  error: (message: string | string[], autoClose?: number) => void;
  success: (message: string | string[], autoClose?: number) => void;
  warn: (message: string | string[], autoClose?: number) => void;
  invoke: (type: 'info' | 'error' | 'success' | 'warn', text: string, autoClose?: number, icon?: React.ReactNode) => void;
}

const Notification: INotification = {
  info: (message, autoClose) => {
    Notification.invoke('info', Array.isArray(message) ? message[0] : message, autoClose, <Info className="text-tra-primary h-8 w-8" />);
  },
  error: (message, autoClose) => {
    Notification.invoke('error', Array.isArray(message) ? message[0] : message, autoClose, <Error className="text-error h-8 w-8" />);
  },
  success: (message, autoClose) => {
    Notification.invoke('success', Array.isArray(message) ? message[0] : message, autoClose, <Check className="text-success h-8 w-8" />);
  },
  warn: (message, autoClose) => {
    Notification.invoke('warn', Array.isArray(message) ? message[0] : message, autoClose, <Warning className="text-warning h-8 w-8" />);
  },
  invoke: (type, text, autoClose, icon) => {
    const translatedText = t(text, { defaultValue: text });
    toast[type](translatedText, {
      position: 'top-right',
      autoClose: autoClose ?? 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      closeButton: false,
      icon,
    });
  },
};

export default Notification;
