import { useEffect } from 'react';
import { useRouter } from 'expo-router';

const ExerciseList = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/login'); 
  }, []);

  return null; 
};

export default ExerciseList;
