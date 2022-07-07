import { ScrollView, View } from 'react-native';
import { Text, Card, Image, Button, Icon, Header } from 'react-native-elements';
import skylight from '../assets/images/mainskylight.jpg';
import { useNavigation } from '@react-navigation/native';

const MainCard = () => {
    return (
        <ScrollView>
            <View 
            style={{
            marginTop: 25, 
            width: 350, 
            height: 300,
            }}
            >
              <Card>
                <Card.Title
                style={{ color: 'black'}}
                >
                Skylight Calculator 
                </Card.Title> 
                <Card.Image
                    style={{ padding: 0, }}
                    source={skylight}
                />
              </Card>
            </View>
          </ScrollView>
    );
};

const IdentifyBtn = ({}) => {
  const navigation = useNavigation();
    return (
        <ScrollView>
        <View>
              <Button
               onPress={() => navigation.navigate('Identify')}
                buttonStyle={{
                    backgroundColor: '#F5272B',
                    borderRadius: 10,
                  }}
                title={'Identify Skylights'}
                containerStyle={{
                  width: 200,
                  marginHorizontal: 50,
                  marginVertical: 10,
                }}
              />
        </View>
        </ScrollView>

    );
};

const SkylightCalBtn = () => {
  const navigation = useNavigation();
    return (
        <ScrollView>
        <View>
              <Button
              onPress={() => navigation.navigate('SkylightCal')}
              buttonStyle={{
                backgroundColor: '#F5272B',
                borderRadius: 10,
              }}
                title={'Skylight Calculator'}
                containerStyle={{
                  width: 200,
                  marginHorizontal: 50,
                  marginVertical: 10,
                }}
              />
        </View>
        </ScrollView>

    );
};

const GlassBtn = () => {
  const navigation = useNavigation();
    return (
        <ScrollView>
        <View>
              <Button
              onPress={() => navigation.navigate('Glass')}
               buttonStyle={{
                backgroundColor: '#F5272B',
                borderRadius: 10,
              }}
                title={'Glass vs Plastic'}
                containerStyle={{
                  width: 200,
                  marginHorizontal: 50,
                  marginVertical: 10,
                }}
              />
        </View>
        </ScrollView>
    );
};

const ContactBtn = () => {
  const navigation = useNavigation();
    return (
        <ScrollView>
        <View>
              <Button
              onPress={() => navigation.navigate('Contact')}
               buttonStyle={{
                backgroundColor: '#F5272B',
                borderRadius: 10,
              }}
                title={'Contact Us'}
                containerStyle={{
                  width: 200,
                  marginHorizontal: 50,
                  marginVertical: 10,
                }}
              />
        </View>
        </ScrollView>
    );
};


const HomeScreen = () => {
    return (
        <>
        <ScrollView
        style={{backgroundColor: '#e0e0e0'}}>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <MainCard></MainCard>
            <IdentifyBtn></IdentifyBtn>
            <SkylightCalBtn></SkylightCalBtn>
            <GlassBtn></GlassBtn>
            <ContactBtn></ContactBtn>
        </View >
        </ScrollView>
        </>
    );
};

export default HomeScreen; 