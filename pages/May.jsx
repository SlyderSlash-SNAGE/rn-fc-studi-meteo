import { useEffect, useState } from 'react'
import { Text, View, Button } from 'react-native'
import * as Location from 'expo-location'
import axios from 'axios'
import * as SQLite from 'expo-sqlite'
const appid = process.env.EXPO_PUBLIC_WEATHER_KEY

const May = ({navigation, route}) => {
    const [location, setLocation] = useState(false)
    const [message, setMessage] = useState(false)
    const [weather, setWeather] = useState(false)

    const getLocation = async() => {
        let { status } = await Location.requestForegroundPermissionsAsync()
        if( status !== 'granted' ){
            setMessage('Nous n\'avons pas le droit d\'utiliser votre localisation')
            return null
        }

        const location = await Location.getCurrentPositionAsync()
        setLocation(location)
    }

    useEffect(()=> {
        getLocation()
    },[])
    useEffect(()=> {
        if(location){
            const {latitude, longitude} = location.coords
            axios({
                method: 'GET',
                url: `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${appid}`
            })
            .then(async(res) => {
                res.status===200
                ? setWeather(res.data)
                : setMessage(JSON.stringify(res))
                const db = SQLite.openDatabase('myWeatherApp')
                db.exec([{sql: 'CREATE TABLE weather (id INT, positionlat VARCHAR, positionlong VARCHAR, type VARCHAR);', args: []}], false, ()=> {
                    setMessage('Data enregistrée !')
                })
                await db.closeAsync()
            })
            .catch(err => {
                setMessage(JSON.stringify(err))
            })
        }
    },[location])
    return (
        <View>
            {message && <Text>{message}</Text>}
            {weather && <Text>{JSON.stringify(weather)}</Text>}
            {(!weather && !message)&& <Text>En cours de chargement ....</Text>}
            <Text>Bienvenu sur la page May Théo</Text>
            <Text>Message : {route.params.message}</Text>
            <Button
                title="Voir les prévisions !"
                onPress={()=> {
                    navigation.navigate('Prévisions')
                }}
            />
        </View>
    )
}

export default May