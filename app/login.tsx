import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';

const LoginScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) {
      Alert.alert('Login Successful', `Welcome, ${email}!`);
      router.push('/home'); 
    } else {
      Alert.alert('Error', 'Please enter email and password.');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Login</Text>

      {}
      <TextInput
        style={{
          width: '100%',
          height: 50,
          borderWidth: 1,
          borderColor: 'gray',
          borderRadius: 8,
          paddingHorizontal: 10,
          marginBottom: 15,
        }}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      {}
      <TextInput
        style={{
          width: '100%',
          height: 50,
          borderWidth: 1,
          borderColor: 'gray',
          borderRadius: 8,
          paddingHorizontal: 10,
          marginBottom: 15,
        }}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {}
      <TouchableOpacity
        onPress={handleLogin}
        style={{
          backgroundColor: 'blue',
          padding: 15,
          borderRadius: 8,
          width: '100%',
          alignItems: 'center',
        }}
      >
        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
