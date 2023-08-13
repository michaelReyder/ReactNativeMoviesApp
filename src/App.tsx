import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import './global.css';
import MovieDetailsScreen from 'screens/MovieDetailsScreen';
import MoviesGridScreen from 'screens/MoviesGridScreen';
import { RootStackParamList } from 'types/component.types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Pop Movies"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#212121',
                    },
                    headerTintColor: '#fff',
                    headerTitleAlign: 'left',
                    headerLargeTitle: true,
                }}
            >
                <Stack.Screen name="Pop Movies" component={MoviesGridScreen} />
                <Stack.Screen name="Movie Details" component={MovieDetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
