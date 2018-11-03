import React from 'react';
import {View, Text, Button} from 'react-native';

export class HomeScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        const params = navigation.state.params || {};
        return {
            headerLeft: <Button
                color={'#fff'}
                title={'Info'}
                onPress={() => navigation.navigate('Detail')}/>
        }
    };

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Home Screen</Text>
                <Button
                    title={'Go to Profile page'}
                    onPress={() => this.props.navigation.navigate('Profile')}
                />
            </View>
        );
    }
}
