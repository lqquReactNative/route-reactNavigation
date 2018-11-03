import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export class ProfileScreen extends Component {

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Profile Screen</Text>
                <Button
                    title={"Go to this Page again."}
                    onPress={() => this.props.navigation.push("Profile")}
                />
                <Button
                    title={'go to Home'}
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Button title={'go to detail page '} onPress={() => this.props.navigation.navigate('Detail')}/>
                <Button
                    title={'Go back'}
                    onPress={() => this.props.navigation.goBack()}
                />
                <Button
                    title={'Pop up'}
                    onPress={() => this.props.navigation.popToTop()}
                />
            </View>
        );
    }
}
