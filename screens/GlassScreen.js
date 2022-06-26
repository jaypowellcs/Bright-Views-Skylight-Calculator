import { ScrollView, View, StyleSheet } from 'react-native';
import { Text, Card, Image, Button, Icon, Header, ListItem } from 'react-native-elements';
import deckmount from '../assets/images/deckmount.jpg';
import curbmount from '../assets/images/curbmount.jpg';
import selfflash from '../assets/images/selfflash.webp';

const DetailGlassCard = () => {
    return (
        <Card style={{margin: 10}}>
            <Card.Title>Glass Skylights</Card.Title>
            <Card.Divider />
            <Card.Image
            style={{ padding: 0, height:250, width: 450 }}
            source={deckmount}
            />
            <Text>
            Benefits and Disadvantages of Glass Skylights
            </Text>
            <Card.Divider />
            <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium ultrices elementum. Praesent at lorem sed diam consequat fringilla eget tincidunt eros. In interdum ante sed justo tincidunt interdum. Curabitur tincidunt urna non dignissim malesuada. Sed a aliquet quam. Phasellus et nunc tempus quam pulvinar dignissim sed eu odio. Cras tincidunt quam ac imperdiet dapibus. Sed euismod ante quis risus efficitur rhoncus. Proin odio nibh, tristique sed luctus a, aliquet eu mauris. In at euismod nisi, eu accumsan orci. Nulla eget porttitor tellus. Aenean scelerisque varius arcu sed tristique. Nullam sed libero laoreet, suscipit tortor a, dignissim justo. Vestibulum laoreet vestibulum elit quis pharetra. Sed sollicitudin augue erat, sed convallis mi mattis a.
            </Text>

        </Card>
    );
};

const DetailAcrylicCard = () => {
    return (
        <Card style={{margin: 10}}>
            <Card.Title>Acrylic Skylights</Card.Title>
            <Card.Divider />
            <Card.Image
            style={{ padding: 0,  margin: 10 }}
            source={selfflash}
            />
            <Text>
            Benefits and Disadvantages of Acrylic Skylights 
            </Text>
            <Card.Divider />
            <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium ultrices elementum. Praesent at lorem sed diam consequat fringilla eget tincidunt eros. In interdum ante sed justo tincidunt interdum. Curabitur tincidunt urna non dignissim malesuada. Sed a aliquet quam. Phasellus et nunc tempus quam pulvinar dignissim sed eu odio. Cras tincidunt quam ac imperdiet dapibus. Sed euismod ante quis risus efficitur rhoncus. Proin odio nibh, tristique sed luctus a, aliquet eu mauris. In at euismod nisi, eu accumsan orci. Nulla eget porttitor tellus. Aenean scelerisque varius arcu sed tristique. Nullam sed libero laoreet, suscipit tortor a, dignissim justo. Vestibulum laoreet vestibulum elit quis pharetra. Sed sollicitudin augue erat, sed convallis mi mattis a.
            </Text>
        </Card>
    );
};

const styles = StyleSheet.create({
    leftcontainer: {
    marginBottom: 8,
      flex: 1, 
      flexDirection: 'column',
    },
    rightcontainer: {
      marginBottom: 8,
      flex: 2, 
      flexDirection: 'column',
    },
});

const GlassScreen = () => {
   return (
    <ScrollView>
        <View>
            <DetailGlassCard></DetailGlassCard>
            <DetailAcrylicCard></DetailAcrylicCard>
        </View>
    </ScrollView>
   );
};

export default GlassScreen; 