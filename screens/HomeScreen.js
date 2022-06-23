import { ScrollView, View } from 'react-native';
import { Text, Card, Image, Button, Icon, Header } from 'react-native-elements';
import skylight from '../assets/images/mainskylight.jpg';
import { useNavigation } from '@react-navigation/native';


const MainCard = () => {
    return (
        <ScrollView>
            <View style={{
                marginTop: 50, 
                width: 350, 
                height: 350}}>
                <Card>
                  <Card.Image
                      style={{ padding: 0 }}
                      source={skylight}
                  />
                  <Card.Title
                  style={{ marginTop: 10 }}
                  >
                  Skylight Calculator 
                  </Card.Title> 
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
    return (
        <ScrollView>
        <View>
              <Button
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

const WhyBtn = () => {
    return (
        <ScrollView>
        <View>
              <Button
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

const HomeScreen = (navigation) => {
    return (
        <>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <MainCard></MainCard>
            <IdentifyBtn></IdentifyBtn>
            <SkylightCalBtn></SkylightCalBtn>
            <WhyBtn></WhyBtn>
        </View >
        </>
    );
};

export default HomeScreen; 