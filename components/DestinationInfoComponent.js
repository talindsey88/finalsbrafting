import React, { Component } from 'react';
import { ScrollView, Text, FlatList, View } from 'react-native';
import { Card, Icon, Rating, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import * as MailComposer from 'expo-mail-composer';


const mapStateToProps = state => {
    return {
        destinations: state.destinations,
        reviews: state.reviews
    };
};



function RenderDestination(props) {

    const {destination, sendMail} = props;
    

    if (destination) {
        return (
            <Card
                textColor={{black}}
                featuredTitle={destination.name}
                image={{uri: baseUrl + destination.image}}>
                <Text style={{margin: 10}}>
                    {destination.description}
                </Text>
                <Button
                            title="Send Email"
                            buttonStyle={{backgroundColor: '#5637DD', margin: 40}}
                            icon={<Icon
                                name='envelope-o'
                                type='font-awesome'
                                color='#fff'
                                iconStyle={{marginRight: 10}}
                            />}
                            onPress={() => sendMail(destination)}
                        />
            </Card>
        );
    }
    return <View />;
}


function RenderReviews({reviews}) {

    const renderReviewItem = ({item}) => {
        return (
            <View style={{margin: 10}}>
            <Text style={{fontSize: 14}}>{item.text}</Text>
            <Rating
                readonly
                startingValue={item.rating}
                imageSize={10}
                style={{ paddingVertical:'5%', alignItems:'flex-start' }}
            />
            <Text style={{fontSize: 12}}>{`-- ${item.author}, ${item.date}`}</Text>
        </View>
        );
    };

    return (
        <Card title='Reviews'>
            <FlatList
                data={reviews}
                renderItem={renderReviewItem}
                keyExtractor={item => item.id.toString()}
            />
        </Card>
    );
}



class DestinationInfo extends Component {


    static navigationOptions = {
        title: 'Destination Information'
    }

    sendMail(destination) {
        MailComposer.composeAsync({
            recipients: ['tripinfo@sbrafting.co'],
            subject: 'Inquiry',
            body: `Hello Im interested in booking a ${destination.name} trip` 
        })
    }

    render() {
        const destinationId = this.props.navigation.getParam('destinationId');
        const destination = this.props.destinations.destinations.filter(destination => destination.id === destinationId)[0];
        const reviews = this.props.reviews.reviews.filter(review => review.destinationId === destinationId);
        return (
            <ScrollView>
                <RenderDestination destination={destination} sendMail={this.sendMail}/>
                <RenderReviews reviews={reviews} />
            </ScrollView>
        );
    }
}

export default connect(mapStateToProps)(DestinationInfo);