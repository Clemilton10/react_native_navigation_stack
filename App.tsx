import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Other from './src/screens/Other';

const Stack = createNativeStackNavigator();

function App() {
	return (
		<NavigationContainer>
			{/**/}
			{/* screenOptions={{ headerShown: false }} ➜ esconde todos Headers */}
			{/**/}
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				{/**/}
				{/* options={{ headerShown: false }} ➜ esconde o Header da página */}
				{/* options={{ headerLeft/headerTitle/headerRight: () => (<Button />) }} ➜ Dá pra colocar componentes no Header */}
				{/**/}
				<Stack.Screen
					name="Home"
					component={Home}
					options={{ title: 'Home' }}
				/>
				<Stack.Screen
					name="Other"
					component={Other}
					options={{ title: 'Other' }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
