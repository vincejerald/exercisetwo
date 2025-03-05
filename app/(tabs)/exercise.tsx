import { View, Text, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import Stopwatch from './Stopwatch'; // Import the Stopwatch component

const exercises = [
  { id: 1, title: "Exercise One" },
  { id: 2, title: "Exercise Two" },
  { id: 3, title: "Exercise Three" },
];

const ExercisePage = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10 }}>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 10 }}>
        {exercises.map((exercise) => (
          <View 
            key={exercise.id} 
            style={{ padding: 16, width: 200, borderWidth: 1, borderRadius: 10, margin: 5, alignItems: 'center' }}
          >
            <Link href={`/exercise/${exercise.id}`}>
              <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>{exercise.title}</Text>
            </Link>
            <Stopwatch />  {}
          </View>
        ))}
      </View>
    </View>
  );
};

export default ExercisePage;
