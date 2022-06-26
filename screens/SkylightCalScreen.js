import { ScrollView, View, StyleSheet } from 'react-native';
import { Text, Card, Image, Button, Icon, Header } from 'react-native-elements';
import deckmount from '../assets/images/deckmount.jpg';
import curbmount from '../assets/images/curbmount.jpg';
import selfflash from '../assets/images/selfflash.webp';


const DeckMountCard = () => {
    return (
       
                <Card  style={{margin: 10}}>
                    <Card.Title>Deck Mounted Skylight</Card.Title>
                    <Card.Divider />
                    <Card.Image
                    style={{ padding: 0, height:250, width: 450 }}
                    source={deckmount}
                    />
                    <Text style={{ marginBottom: 10 }}>
                    Is your Skylight a Deck Mounted Skylight? 
                    </Text>
                    <Button
                    buttonStyle={{
                        borderRadius: 0,
                        marginLeft: 0,
                        marginRight: 0,
                        marginBottom: 0,
                        backgroundColor: '#F5272B',
                    }}
                    title="Deck Mounted Calculator"
                    />
                </Card>
    
    );
};

const CurbMountCard = () => {
    return (
        
                <Card>
                    <Card.Title>Curb Mounted Skylight</Card.Title>
                    <Card.Divider />
                    <Card.Image
                    style={{ padding: 0, height: 350,}}
                    source={curbmount}
                    />
                    <Text style={{ marginBottom: 10 }}>
                    Is your Skylight a Curb Mounted Skylight? 
                    </Text>
                    <Button
                    buttonStyle={{
                        borderRadius: 0,
                        marginLeft: 0,
                        marginRight: 0,
                        marginBottom: 0,
                        backgroundColor: '#F5272B',
                    }}
                    title="Curb Mounted Calculator"
                    />
                </Card>
          
    );
};

const SelfFlashCard = () => {
    return (
                <Card>
                    <Card.Title>Self Flashed Skylight</Card.Title>
                    <Card.Divider />
                    <Card.Image
                    style={{ padding: 0,  margin: 10 }}
                    source={selfflash}
                    />
                    <Text style={{ marginBottom: 10 }}>
                    Is your Skylight a Self Flashed Skylight? 
                    </Text>
                    <Button
                    backgroundColor='#F5272B'
                    buttonStyle={{
                        borderRadius: 0,
                        marginLeft: 0,
                        marginRight: 0,
                        marginBottom: 0,
                        backgroundColor: '#F5272B',
                    }}
                    title="Self Flashed Calculator"
                    />
                </Card>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
        },
    }
);


const SkylightCalScreen = () => {
   return (
    <ScrollView>
        <View style={styles.container}>
            <DeckMountCard></DeckMountCard>
            <CurbMountCard></CurbMountCard>
            <SelfFlashCard></SelfFlashCard>
        </View>
    </ScrollView>
   );
};

export default SkylightCalScreen; 