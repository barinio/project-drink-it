import { useEffect } from 'react';
import axios from 'axios';

const WakeUpServer = () => {
  useEffect(() => {
    const wakeUp = async () => {
      try {
        console.log('Server activation');
        await axios.get('https://project-drink-it-backend.onrender.com');
      } catch (error) {
        console.log('The server just woke up✅');
      }
    };

    wakeUp();
  }, []);

  return;
};

export default WakeUpServer;
