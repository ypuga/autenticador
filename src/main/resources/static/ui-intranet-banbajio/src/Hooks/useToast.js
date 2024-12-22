import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useToast = () => {

  const showToast = (message, type = 'info', position) => {
    
    switch (type) {
      case 'success':
        toast.success(message, {
            position: position,
            autoClose: 3000,
            theme: 'colored'
        });
        break;
      case 'error':
        toast.error(message, {
            position: position,
            autoClose: 3000,
            theme: 'colored'
        });
        break;
      case 'warning':
        toast.warn(message, {
            position: position,
            autoClose: 3000,
            theme: 'colored'
        });
        break;
      default:
        toast.info(message, {
            position: position,
            autoClose: 3000,
            theme: 'colored'
        });
        break;
    }
  };

  return { showToast };
};

export default useToast;
