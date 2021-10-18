import React, { Component } from 'react';
import { ScrollView, Text, FlatList } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from './LoadingComponent';


const mapStateToProps = state => {
    return {
        sponsors: state.sponsors
    };
};


function Mission() {
    return (
        <Card title='Our Mission'>
            <Text style={{margin: 10}}>
            Our mission is to provide a fun and safe experience rafting America’s West rivers. Allowing people of all abilities and ages to experience the river is our upmost importance. Our life is eating, breathing and living on the rivers and our goal is to share that love of the outdoors with every client. We provide this with professional guides and equipment that is above the industry standard.
            </Text>
        </Card>
    );
}

class About extends Component {

    static navigationOptions = {
        title: 'About Us'
    }
        render() {
            const renderSponsor = ({item}) => {
                return (
                    <ListItem
                        title={item.name}
                        subtitle={item.description}
                        leftAvatar={{source: {uri: baseUrl + item.image}}}
                    />
                );
            };
    
            if (this.props.sponsors.isLoading) {
                return (
                    <ScrollView>
                        <Mission />
                        <Card
                            title='Sponsors'>
                            <Loading />
                        </Card>
                    </ScrollView>
                );
            }
            if (this.props.sponsors.errMess) {
                return (
                    <ScrollView>
                        <Mission />
                        <Card
                            title='Sponsors'>
                            <Text>{this.props.sponsors.errMess}</Text>
                        </Card>
                    </ScrollView>
                );
            }
            return (
                <ScrollView>
                <Mission />
                <Card
                    title="Sponsors">
                    <FlatList 
                        data={this.props.sponsors.sponsors}
                        renderItem={renderSponsor}
                        keyExtractor={item => item.id.toString()}
                    />
                </Card>
            </ScrollView>
        );
    }
}

export default connect(mapStateToProps)(About);