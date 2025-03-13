import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import Stopwatch from './Stopwatch'; 

const exercise = [
  { id: 1, title: "Exercise One", description: "Create a Login Screen." },
  { id: 2, title: "Exercise Two", description: "Create a Register Screen." },
  { id: 3, title: "Exercise Three", description: "Create a Home Screen." },
];

const ExercisePage = () => {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10 }}>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 10 }}>
        {exercise.map((exercise) => (
          <TouchableOpacity 
            key={exercise.id} 
            style={{ padding: 16, width: 200, borderWidth: 1, borderRadius: 10, margin: 5, alignItems: 'center' }}
            onPress={() => router.push('/RegisterScreen')} 
          >
            <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>{exercise.title}</Text>
            <Text style={{ fontSize: 14, textAlign: 'center', marginVertical: 5 }}>{exercise.description}</Text>
            <Stopwatch />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default ExercisePage;
