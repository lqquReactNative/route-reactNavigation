import React from 'react';
import {View, Button, Text} from 'react-native'

export class DetailScreen extends React.Component {

    static  navigationOptions = ({navigation}) => ({title: navigation.getParam('title', 'No Title')})

    render() {
        const {navigation} = this.props;
        const itemId = navigation.getParam('itemId', 'NO-ID');
        const title = navigation.getParam('title', 'no title');
        return <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>{title}</Text>
            <Text>`Item Id${itemId}`</Text>
            <Button title='go back' onPress={() => this.props.navigation.goBack()}/>
            <Button title='update title' onPress={() => this.props.navigation.setParams({title:'New Title'})}/>
            <Button title='direct go to home page' onPress={() => this.props.navigation.popToTop()}/>
        </View>
    }
}
