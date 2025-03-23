import React, { createContext, useContext, useReducer } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useRouter } from 'expo-router';


const initialExercises = [
  { id: 1, title: "Exercise One", description: "Create a Login Screen." },
  { id: 2, title: "Exercise Two", description: "Create a Register Screen." },
  { id: 3, title: "Exercise Three", description: "Create a Home Screen." },
  { id: 4, title: "Exercise Four", description: "Create a Profile Screen." },
];


const exerciseReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, { id: Date.now(), ...action.payload }];
    case 'UPDATE':
      return state.map(ex => ex.id === action.payload.id ? action.payload : ex);
    case 'DELETE':
      return state.filter(ex => ex.id !== action.payload);
    default:
      return state;
  }
};


const ExerciseContext = createContext();

export const useExercise = () => useContext(ExerciseContext);

const ExerciseProvider = ({ children }) => {
  const [exercises, dispatch] = useReducer(exerciseReducer, initialExercises);

  return (
    <ExerciseContext.Provider value={{ exercises, dispatch }}>
      {children}
    </ExerciseContext.Provider>
  );
};

const ExercisePage = () => {
  const { exercises, dispatch } = useExercise();
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10 }}>
      <FlatList 
        data={exercises}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={{ padding: 16, width: 200, borderWidth: 1, borderRadius: 10, margin: 5, alignItems: 'center' }}
            onPress={() => router.push('/RegisterScreen')} 
          >
            <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>{item.title}</Text>
            <Text style={{ fontSize: 14, textAlign: 'center', marginVertical: 5 }}>{item.description}</Text>
            <TouchableOpacity onPress={() => dispatch({ type: 'DELETE', payload: item.id })}>
              <Text style={{ color: 'red' }}>Delete</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity 
        style={{ marginTop: 20, padding: 10, backgroundColor: 'blue', borderRadius: 5 }}
        onPress={() => dispatch({ type: 'ADD', payload: { title: 'New Exercise', description: 'New Exercise Description' } })}
      >
        <Text style={{ color: 'white' }}>Add Exercise</Text>
      </TouchableOpacity>
    </View>
  );
};

export default function App() {
  return (
    <ExerciseProvider>
      <ExercisePage />
    </ExerciseProvider>
  );
}
