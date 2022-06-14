import React, { useState  } from 'react'
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';
import { EvilIcons } from '@expo/vector-icons'; 

export default function SearchBar({ fetchWeatherData }) {

    const [cityName, setCityName] = useState('');

    return (
        <View style={styles.searchBar}>
            <TextInput 
                placeholder='Digite o nome da cidade'
                value={cityName}
                onChangeText={(text) => setCityName(text)}
            />
            <EvilIcons name="search" size={25} color="black"  onPress={() => fetchWeatherData(cityName)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    searchBar: {
        marginTop: 35,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: Dimensions.get('screen').width - 20,
        borderWidth: 1,
        paddingVertical: 10,
        borderRadius: 28,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        borderColor: '#16161d'
    }
})
