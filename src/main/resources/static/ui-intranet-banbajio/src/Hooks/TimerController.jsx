import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { logOutApp } from '../Store/Authetication/Thunks';

const TimerController = ({ children }) => {
  const timeoutRef = useRef(null);

  const dispatch = useDispatch();

  const INACTIVITY_LIMIT = 300000;

  const resetTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      dispatch(logOutApp());
    }, INACTIVITY_LIMIT);
  };

  useEffect(() => {
    const handleUserActivity = () => {
      resetTimer();
    };

    window.addEventListener('mousemove', handleUserActivity);
    window.addEventListener('keydown', handleUserActivity);
    window.addEventListener('click', handleUserActivity);

    resetTimer();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      window.removeEventListener('mousemove', handleUserActivity);
      window.removeEventListener('keydown', handleUserActivity);
      window.removeEventListener('click', handleUserActivity);
    };
  }, []);

  return <>{children}</>;
};

export default TimerController;
