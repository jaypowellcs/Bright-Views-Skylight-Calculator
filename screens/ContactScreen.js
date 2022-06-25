import {useState} from 'react';
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    Switch,
    Button,
    Modal
} from 'react-native';
import { Card } from 'react-native-elements';
import {Input} from 'react-native-elements';


const ContactScreen = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


    const resetForm = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setMessage('');
    };


    return (
        <ScrollView>
            <Card
            wrapperStyle={{margin: 10}}
            >
                <Card.Title
                style={{fontSize: 20}}>
                    Please insert your information below and we will contact you
                </Card.Title>
                <Card.Divider />
                <Input
                placeholder='First Name'
                leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                leftIconContainerStyle={{paddingRight: 10}}
                onChangeText={(firstName)=> setFirstName(firstName)}
                value={firstName}
                >
                </Input>
                <Input
                placeholder='Last Name'
                leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                leftIconContainerStyle={{paddingRight: 10}}
                onChangeText={(lastName)=> setLastName(lastName)}
                value={lastName}
                >
                </Input>
                <Input
                placeholder='user@email.com'
                leftIcon={{ type: 'font-awesome', name: 'envelope-o' }}
                leftIconContainerStyle={{paddingRight: 10}}
                onChangeText={(email)=> setEmail(email)}
                value={email}
                >
                </Input>
                <Input
                placeholder='Message to us'
                leftIcon={{ type: 'font-awesome', name: 'comment-o' }}
                leftIconContainerStyle={{paddingRight: 10}}
                onChangeText={(message)=> setMessage(message)}
                value={message}
                multiline
                numberOfLines={4}
                textAlign='left'
                >
                </Input>
                <Button
                    title="Submit"
                    color='#F5272B'
                    accessibilityLabel="Learn more about this purple button"
                    onPress={() => resetForm()}
                    />
            </Card>
        </ScrollView>
    )
}

export default ContactScreen; 