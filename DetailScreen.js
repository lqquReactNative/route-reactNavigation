import React from 'react';
import {View, Button, Text} from 'react-native'

export class DetailScreen extends React.Component {
    render() {
        return <View style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
            <Text>detail page</Text>
            <Button title='go back' onPress={() => this.props.navigation.goBack()}/>
            <Button title='direct go to home page' onPress={() => this.props.navigation.popToTop()}/>
        </View>
    }
}
