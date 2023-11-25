import { useEffect } from 'react';

const useKeyDown = (callback) => {
  useEffect(() => {
    const keyDownHandler = (e) => {
      if (e.key === 'Enter') {
        callback();
      }
    };

    document.addEventListener('keydown', keyDownHandler);
    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, [callback]);
};

export default useKeyDown;
