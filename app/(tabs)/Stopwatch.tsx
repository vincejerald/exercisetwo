import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isRunning]);

    const handleStartStop = () => {
        setIsRunning(!isRunning);
    };

    const handleReset = () => {
        setIsRunning(false);
        setTime(0);
    };

    return (
        <View style={{ alignItems: 'center', marginVertical: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{time} sec</Text>
            <TouchableOpacity 
                onPress={handleStartStop} 
                style={{ backgroundColor: 'blue', padding: 10, margin: 5, borderRadius: 5 }}
            >
                <Text style={{ color: 'white' }}>{isRunning ? 'Stop' : 'Start'}</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={handleReset} 
                style={{ backgroundColor: 'red', padding: 10, borderRadius: 5 }}
            >
                <Text style={{ color: 'white' }}>Reset</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Stopwatch;
