import { Text, View, Button } from 'react-native';

const Forecasts = ({navigation}) => {
    return (
        <View>
            <Text>Bienvenu sur la page prévisions</Text>
            <Button
                title="Aller voir Théo"
                onPress={()=> {
                    navigation.navigate('Mai Théo', {message : 'Hello From prévision'})
                }}
            />
        </View>
    )
}

export default Forecasts