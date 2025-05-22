import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useForm, Controller } from 'react-hook-form';
import { useRouter } from 'expo-router';

const RegisterScreen = () => {
    const [image, setImage] = useState(null);
    const { control, handleSubmit, formState: { errors } } = useForm();
    const router = useRouter();

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const onSubmit = (data) => {
        if (!image) {
            alert('Please select a profile image.');
            return;
        }
        console.log(data);
        alert('Registered Successfully!');
       
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Register</Text>

            <TouchableOpacity onPress={pickImage}>
                {image ? (
                    <Image source={{ uri: image }} style={{ width: 100, height: 100, borderRadius: 50 }} />
                ) : (
                    <View style={{ width: 100, height: 100, backgroundColor: '#ccc', justifyContent: 'center', alignItems: 'center', borderRadius: 50 }}>
                        <Text>Select Image</Text>
                    </View>
                )}
            </TouchableOpacity>

            {}
            <Controller
                control={control}
                rules={{ required: 'Name is required' }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        placeholder="Name"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        style={styles.input}
                    />
                )}
                name="name"
                defaultValue=""
            />
            {errors.name && <Text style={styles.error}>{errors.name.message}</Text>}

            {}
            <Controller
                control={control}
                rules={{
                    required: 'Email is required',
                    pattern: {
                        value: /^\S+@\S+\.\S+$/,
                        message: 'Enter a valid email address'
                    }
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        placeholder="Email"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        style={styles.input}
                        keyboardType="email-address"
                    />
                )}
                name="email"
                defaultValue=""
            />
            {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}

            {}
            <Controller
                control={control}
                rules={{
                    required: 'Password is required',
                    minLength: {
                        value: 6,
                        message: 'Password must be at least 6 characters'
                    }
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        placeholder="Password"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        style={styles.input}
                        secureTextEntry
                    />
                )}
                name="password"
                defaultValue=""
            />
            {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}

            <Button title="Register" onPress={handleSubmit(onSubmit)} />
        </View>
    );
};

const styles = {
    input: {
        width: '100%',
        padding: 10,
        marginVertical: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        backgroundColor: '#fff'
    },
    error: {
        color: 'red',
        alignSelf: 'flex-start',
        marginBottom: 5,
    }
};

export default RegisterScreen;
