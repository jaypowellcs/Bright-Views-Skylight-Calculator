import { ScrollView, View } from 'react-native';
import { Text, Card, Image, Button, Icon, Header } from 'react-native-elements';
import skylight from '../assets/images/mainskylight.jpg';




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

const IdBtn = () => {
    return (
        <ScrollView>
        <View>
              <Button
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

const Main = () => {
    return (
        <>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <MainCard></MainCard>
            <IdBtn></IdBtn>
            <SkylightCalBtn></SkylightCalBtn>
            <WhyBtn></WhyBtn>
        </View >
        </>
    );
};

export default Main;