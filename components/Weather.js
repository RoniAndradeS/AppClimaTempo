import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import SearchBar from './SearchBar';

export default function Weather({ weatherData, fetchWeatherData }) {

    const { weather,
        name,
        main: { temp },
    } = weatherData;
    const [{ main }] = weather;


    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#16161d' />
            
                <SearchBar fetchWeatherData={fetchWeatherData} />

                <View style={styles.containerWeather}>
                    <Text style={{ ...styles.headerText, color: '#fff', fontWeight: 'bold', fontSize: 46 }}>{name}</Text>
                    <Text style={{ ...styles.headerText, color: '#fff', }}>{temp} °C</Text>
                    <Text style={{ ...styles.headerText, color: '#fff', fontWeight: 'bold'}}>{main}</Text>
                </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#16161D',
        alignItems: 'center',
    },
    containerWeather: {
        alignItems: 'center',
        paddingTop: '43%',
    },
    headerText: {
        fontSize: 36,
        marginTop: 10,
    },
});
