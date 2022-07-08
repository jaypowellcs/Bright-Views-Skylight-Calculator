import { ScrollView, View,  StyleSheet} from 'react-native';
import { Text, Image, Button} from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';



const DeckMountedIdentify = () => {
    const navigation = useNavigation();
    return (
        <View>
            <Text>
            Deck Mounted Skylight
            </Text>
            <Text>
            Easiest way to tell if your skylight is a deck mounted skylight is by the top flashing. See below for an example.
            </Text>
            <Image>

            </Image>
            <Button
               onPress={() => navigation.navigate('Identify')}
                buttonStyle={{
                    backgroundColor: '#F5272B',
                    borderRadius: 10,
                  }}
                title={'Identify Your Skylights'}
                containerStyle={{
                  width: 200,
                  marginHorizontal: 50,
                  marginVertical: 10,
                }}
            />
        </View>
    )
}

const CurbMountedIdentify = () => {
    return (
        <View>
            <Text>
            Curb Mounted Skylight
            </Text>
            <Text>
            Easiest way to tell if it is a curb mounted skylight. See below for an example.
            </Text>
            <Image>
                
            </Image>
        </View>
    )
}

const SelfFlashIdentify = () => {
    return (
        <View>
            <Text>
            Self Flashed Skylight
            </Text>
            <Text>
            The Skylight has a throat is the easiest way to tell if the skylight. 
            </Text>
            <Image>
                
            </Image>
        </View>
    )
}

const IdentifyScreen = () => {
   return (
    <ScrollView
    style={{backgroundColor: '#e0e0e0'}}
    >
        <View>
            <DeckMountedIdentify></DeckMountedIdentify>
            <CurbMountedIdentify></CurbMountedIdentify>
            <SelfFlashIdentify></SelfFlashIdentify>
        </View>
    </ScrollView>
   );
};

export default IdentifyScreen; 