import { ScrollView, View } from 'react-native';
//import Constants from 'expo-constants';
//import { createStackNavigator } from '@react-navigation/stack';
import { Text, Card, Image, Button, Icon } from 'react-native-elements';
import skylight from '../assets/images/mainskylight.jpg';


const MainCard = () => {
    return (
        <ScrollView>
            <View style={{marginTop: 125}}>
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

const IdBtn = () => {
    return (
        <ScrollView>
        <View>
              <Button
                title={'React Native Elements'}
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
                title={'React Native Elements'}
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
                title={'React Native Elements'}
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




const Main = () => {
    return (
        <>
      <MainCard></MainCard>
      <IdBtn></IdBtn>
      <SkylightCalBtn></SkylightCalBtn>
      <WhyBtn></WhyBtn>
      </>
    );
};

export default Main;