/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Movies from './movies/Movies'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Movies);
