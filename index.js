
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import list from './FlatList/list';
import {name as appName} from './app.json';
import cards from './CardView/cards';
import api from './Fetching/api';
import img from './CardView/Image';

AppRegistry.registerComponent(appName, () => App);
