/**
 * Created by newfun on 16/6/27.
 */
'use strict';
import React, {Component} from 'react';
import {
	AppStateIOS,
	Text,
	StyleSheet,
	TouchableOpacity,
	View
} from 'react-native';

class secondView extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>{this.props.param1}</Text>
				<TouchableOpacity
					style={styles.button}
					onPress={() => {
						this.props.callback('this callback param!');
						this.props.navigator.pop();
						}
					}
				>
					<Text style={{color:'#FFF', fontSize:17}}>返回</Text>
				</TouchableOpacity>
			</View>
		);
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
			margin: 10
		}
	}
);

module.exports = secondView;