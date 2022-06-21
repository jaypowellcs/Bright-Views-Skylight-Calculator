
import { StyleSheet, Text, View } from "react-native-web"


export default function Header() {
    return (
        <View style={ styles.header}>
            <View>
                <Text style={styles.headerText}> 
                Skylight Cal   
                </Text>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%', 
        height: '100%', 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20, 
        color: '#fff',
        letterSpacing: 1, 
    },
});