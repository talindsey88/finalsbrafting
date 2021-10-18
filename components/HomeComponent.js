import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from './LoadingComponent';


const mapStateToProps = state => {
    return {
        destinations: state.destinations,
        promotions: state.promotions,
        sponsors: state.sponsors
    };
};

function RenderItem(props) {
    const {item} = props;

    if (props.isLoading) {
        return <Loading />;
    }
    if (props.errMess) {
        return (
            <View>
                <Text>{props.errMess}</Text>
            </View>
        );
    }
    if (item) {
        return (
            <Card
                featuredTitle={item.name}
                image={{uri: baseUrl + item.image}}>
            
                <Text style={{margin: 10}}>
                    {item.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

class Home extends Component {

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <ScrollView>
                <RenderItem
                    item={this.props.destinations.destinations.filter(destination => destination.featured)[0]}
                    isLoading={this.props.destinations.isLoading}
                    errMess={this.props.destinations.errMess}
                />
                <RenderItem
                    item={this.props.promotions.promotions.filter(promotion => promotion.featured)[0]}
                    isLoading={this.props.promotions.isLoading}
                    errMess={this.props.promotions.errMess}
                />
                <RenderItem
                    item={this.props.sponsors.sponsors.filter(sponsor => sponsor.featured)[0]}
                    isLoading={this.props.sponsors.isLoading}
                    errMess={this.props.sponsors.errMess}
                />
            </ScrollView>
        );
    }
}

export default connect(mapStateToProps)(Home);