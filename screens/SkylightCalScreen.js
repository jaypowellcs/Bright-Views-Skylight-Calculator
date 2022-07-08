import { ScrollView, View, StyleSheet } from 'react-native';
import { Text, Card, Image, Button, Icon, Header } from 'react-native-elements';
import deckmount from '../assets/images/deckmount.jpg';
import curbmount from '../assets/images/curbmount.jpg';
import selfflash from '../assets/images/selfflash.webp';
import questionmark from '../assets/images/question-mark.jpg';

const NotSureCard = () => {
    return (
        <Card style={{margin: 10}}>
            <Card.Title
            style={styles.title}
            >
            Unsure?  
            </Card.Title>
            <Card.Divider />
            <Card.Image
            style={{ padding: 0,  margin: 10, height:350, width: 450 }}
            source={questionmark}
            />
            <Text style={styles.fonts}>
            If you are unsure of the type of Skylight you have. Press the button below.  
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
            title="Skylight Identifer"
            />
        </Card>
    );
};

const DeckMountCard = () => {
    return (
            <Card style={{margin: 10}}>
                <Card.Title
                style={styles.title}
                >
                Deck Mounted Skylight</Card.Title>
                <Card.Divider />
                <Card.Image
                style={{ padding: 0, height:250, width: 450 }}
                source={deckmount}
                />
                <Text style={styles.fonts}>
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
                title="Deck Mounted Skylight Calculator"
                />
            </Card>
    );
};

const CurbMountCard = () => {
    return (
            <Card style={{margin: 10}}>
                <Card.Title
                style={styles.title}
                >
                Curb Mounted Skylight
                </Card.Title>
                <Card.Divider />
                <Card.Image
                style={{ padding: 0, height: 350,}}
                source={curbmount}
                />
                <Text style={styles.fonts}>
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
                title="Curb Mounted Skylight Calculator"
                />
            </Card>
        
    );
};

const SelfFlashCard = () => {
    return (
        <Card style={{margin: 10}}>
            <Card.Title
            style={styles.title}
            >
            Self Flashed Skylight
            </Card.Title>
            <Card.Divider />
            <Card.Image
            style={{ padding: 0,  margin: 10 }}
            source={selfflash}
            />
            <Text style={styles.fonts}>
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
            title="Self Flashed Skylight Calculator"
            />
        </Card>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    fonts: {
      marginBottom: 8,
      textAlign: 'center',
      fontSize: 16,
    },
    title: {
      fontSize: 16,
      marginTop: 5,
    },
    });


const IdentifyScreen = () => {
   return (
    <ScrollView
    style={{backgroundColor: '#e0e0e0'}}
    >
        <View style={styles.container}>
            <NotSureCard></NotSureCard>
            <DeckMountCard></DeckMountCard>
            <CurbMountCard></CurbMountCard>
            <SelfFlashCard></SelfFlashCard>
        </View>
    </ScrollView>
   );
};

export default IdentifyScreen; 