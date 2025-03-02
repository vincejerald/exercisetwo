import { View, Text, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

const exercises = [
  { id: 1, title: "Exercise One" },
  { id: 2, title: "Exercise Two" },
  { id: 3, title: "Exercise Three" },
];

const ExercisePage = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10 }}>
      {exercises.map((exercise) => (
        <TouchableOpacity 
          key={exercise.id} 
          style={{ padding: 16, width: 250, borderWidth: 1, borderRadius: 10, marginVertical: 5 }}
        >
          <Link href={`/exercise/${exercise.id}`}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>{exercise.title}</Text>
          </Link>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ExercisePage;
