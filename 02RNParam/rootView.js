/**
 * Created by newfun on 16/6/23.
 */
'use strict';
import React, {Component} from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
	Image,
	Alert
} from 'react-native'

import secondView from './secondView';

let i = 1;

class Button extends Component {
	render() {
		return (
			<TouchableOpacity
				style={styles.button}
				onPress={this.props.function}
			>
				<Text style={{color:'#FFF', fontSize:17}}>{this.props.name}</Text>
			</TouchableOpacity>
		);
	}
}

class rootView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			callbackParam: null,
		};
	}

	render() {
		return (
			<View style={styles.container}>
				<Button
					name="组件传参"
					function={()=>this.AlertView('nothing')}
				/>
				<Button
					name="Navigator传参"
					function={() => this.NextView(secondView)}
				/>
				<Button
					name="Navigator回调"
					function={()=>this.AlertView('都在中间啦')}
				/>
				{this.state.callbackParam ? <Text>{this.state.callbackParam}</Text> : <View></View>}
			</View>
		);
	}

	NextView(componentName) {
		i++;
		let _me = this;
		const {navigator} = this.props;
		if (navigator) {
			navigator.push({
				name: 'componentName',
				component: componentName,
				params: {
					param1: i,
					callback(param){
						_me.setState({
							callbackParam:param
						});
					}
				}
			});
		}
	}

	AlertView(title) {
		Alert.alert(
			title,
			'😒',
			[
				{text: '😂'}
			]
		)
	}
}

const styles = StyleSheet.create({
		container: {
			flex: 1,
			padding: 8,
			justifyContent: 'center',
			alignItems: 'center',
			backgroundColor: '#fff'
		},
		button: {
			width: 180,
			height: 40,
			backgroundColor: '#00BFFF',
			alignItems: 'center',
			justifyContent: 'center',
			borderRadius: 5,
			margin: 5
		}
	}
);
module.exports = rootView;
