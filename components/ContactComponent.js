import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import * as MailComposer from 'expo-mail-composer';




class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    static navigationOptions = {
        title: 'Contact'
    }

    sendMail() {
        MailComposer.composeAsync({
            recipients: ['tripinfo@sbrafting.co'],
            subject: 'Booking a Trip',
            body: 'Im interested in booking a trip to'
        })
    }
    render() {
        return (
            <ScrollView>
                <Card title="Contact Information"  wrapperStyle={{margin: 20}} 
                >
                    <Text> 2345 Boatin ln. </Text>
                    <Text> Steamboat Springs, CO 80487</Text>
                    <Text style={{marginBottom: 10}}> U.S.A. </Text>
                    <Text> Phone: 1-970-555-1234 </Text>
                    <Text> Email: tripinfo@sbrafting.co </Text>
                    <Button
                            title="Send Email"
                            buttonStyle={{backgroundColor: '#5637DD', margin: 40}}
                            icon={<Icon
                                name='envelope-o'
                                type='font-awesome'
                                color='#fff'
                                iconStyle={{marginRight: 10}}
                            />}
                            onPress={() => this.sendMail()}
                        />
                </Card>
            </ScrollView>
        );
    }
}

export default Contact;