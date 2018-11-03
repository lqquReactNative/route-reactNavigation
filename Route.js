import {createStackNavigator,} from 'react-navigation';
import {ProfileScreen} from "./ProfileScreen";
import {HomeScreen} from "./HomeScreen";
import {DetailScreen} from "./DetailScreen";

export const Route = createStackNavigator({
    Home: {screen: HomeScreen},
    Profile: {screen: ProfileScreen},
    Detail: {screen: DetailScreen}
}, {
    initialRouteName: 'Home',
});

