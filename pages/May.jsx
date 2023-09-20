import { Text, View, Button } from 'react-native';

const May = ({navigation, route}) => {
    return (
        <View>
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