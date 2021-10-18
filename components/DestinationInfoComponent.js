import React, { Component } from 'react';
import { ScrollView, Text, FlatList, View } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { postFavorite } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        destinations: state.destinations,
        reviews: state.reviews,
        favorites: state.favorites
    };
};

const mapDispatchToProps = {
    postFavorite: destinationId => (postFavorite(destinationId))
};



function RenderDestination(props) {

    const {destination} = props;

    if (destination) {
        return (
            <Card
                featuredTitle={destination.name}
                image={{uri: baseUrl + destination.image}}>
                <Text style={{margin: 10}}>
                    {destination.description}
                </Text>
                <Icon
                    name={props.favorite ? 'heart' : 'heart-o'}
                    type='font-awesome'
                    color='#f50'
                    raised
                    reverse
                    onPress={() => props.favorite ? 
                        console.log('Already set as a favorite') : props.markFavorite()}
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
                <Text style={{fontSize: 12}}>{item.rating} Stars</Text>
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


    markFavorite(destinationId) {
        this.props.postFavorite(destinationId);
    }


    static navigationOptions = {
        title: 'Destination Information'
    }

    render() {
        const destinationId = this.props.navigation.getParam('destinationId');
        const destination = this.props.destinations.destinations.filter(destination => destination.id === destinationId)[0];
        const reviews = this.props.reviews.reviews.filter(review => review.destinationId === destinationId);
        return (
            <ScrollView>
                <RenderDestination destination={destination}
                    favorite={this.props.favorites.includes(destinationId)}
                    markFavorite={() => this.markFavorite(destinationId)}
                />
                <RenderReviews reviews={reviews} />
            </ScrollView>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DestinationInfo);