import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

const exercises = {
  1: { title: "Exercise 1", description: "Create register screen. Register screen fields." },
  2: { title: "Exercise 2", description: "Create login screen. Login screen fields." },
  3: { title: "Exercise 3", description: "Create home screen . Home screen fields." },
};

const ExerciseDetail = () => {
  const { id } = useLocalSearchParams();
  const exercise = exercises[id];

  if (!exercise) {
    return <Text style={{ textAlign: 'center', marginTop: 20 }}>Exercise not found!</Text>;
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{exercise.title}</Text>
      <Text style={{ fontSize: 16, marginTop: 10 }}>{exercise.description}</Text>
    </View>
  );
};

export default ExerciseDetail;
