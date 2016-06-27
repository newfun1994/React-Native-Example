/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
	AppRegistry,
	Text,
	View,
	Navigator
} from 'react-native';

import root1View from './rootView.js';

class RNParam extends Component {
	render() {
		return (
			<Navigator
				initialRoute={{name:'rootView',component:root1View,index:0}}
				renderScene={(route, navigator) => {
                return <route.component {...route.params} navigator={navigator} />
              }}
			/>
		);
	}
}

AppRegistry.registerComponent('RNParam', () => RNParam);


