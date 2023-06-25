import * as React from 'react';
import { Button, View, Text } from 'react-native';

const Other = ({ navigation }: { navigation: any }) => {
	return (
		<View
			style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
		>
			<Text>Other</Text>
			<Button
				title="Go to Other... again"
				onPress={() => navigation.push('Other')}
			/>
			<Button
				title="Go to Home"
				onPress={() => navigation.navigate('Home')}
			/>
			<Button title="Go back" onPress={() => navigation.goBack()} />
			<Button
				title="Go back to first screen in stack"
				onPress={() => navigation.popToTop()}
			/>
		</View>
	);
};
export default Other;
