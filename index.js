import 'expo-asset';
import {AppRegistry} from 'react-native';
import App from './src';
import {name as appName} from './app.json';


// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
AppRegistry.registerComponent(appName, () => App);