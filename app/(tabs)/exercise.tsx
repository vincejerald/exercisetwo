import { View, Text, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

const exercises = [
  { id: 1, title: "Exercise One", description: "Create a register screen with fields for name, email, and password." },
  { id: 2, title: "Exercise Two", description: "Create a login screen with email and password authentication." },
  { id: 3, title: "Exercise Three", description: "Create a home screen that displays user details after login." },
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
            <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>
              {exercise.title}
            </Text>
          </Link>
          {/* Display Description Below Title */}
          <Text style={{ fontSize: 14, textAlign: 'center', marginTop: 5, color: 'gray' }}>
            {exercise.description}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ExercisePage;
