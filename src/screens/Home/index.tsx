import * as React from 'react';
import { Box, BoxText } from './styles';
import { Button, View, Text } from 'react-native';

const Home = ({ navigation }: { navigation: any }) => {
	return (
		<Box>
			<Text>Home Screen</Text>
			<Button
				title="Go to Details"
				onPress={() => navigation.navigate('Other')}
			/>
			<BoxText>teste</BoxText>
		</Box>
	);
};
export default Home;
