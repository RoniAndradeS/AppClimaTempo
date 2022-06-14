import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, StatusBar } from 'react-native';
import Weather from './components/Weather';
import SearchBar from './components/SearchBar';

const API_KEY = "46a9246bebba16d42b36aac3fc3ba8af";


export default function App() {

    const [weatherData, setWeatherData] = useState(null);
    const [loaded, setLoaded] = useState(true);

    async function fetchWeatherData(cityName) {
        setLoaded(false);
        const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
        try {
            const respos = await fetch(API);
            if (respos.status == 200) {
                const data = await respos.json();
                setWeatherData(data);
            } else {
                setWeatherData(null);
            }
            setLoaded(true);

        } catch (error) {
            console.log('erro encontrado:' + error);
        }
    }

    useEffect(() => {
        fetchWeatherData('sao paulo');
    }, [])


    if (!loaded) {
        return (
            <View style={styles.container}>
                <ActivityIndicator color='gray' size={40} />
            </View>

        )
    }

    else if (weatherData === null) {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor='#16161d' />
                <SearchBar fetchWeatherData={fetchWeatherData} />
                <Text style={styles.primaryText}>Cidade não encontrada, por favor tente novamente.</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>

            <Weather weatherData={weatherData} fetchWeatherData={fetchWeatherData} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#16161D',
        alignItems: 'center',
        justifyContent: 'center',
    },
    primaryText: {
        color: '#fff',
        margin: 20,
        fontSize: 25,
    }
});
