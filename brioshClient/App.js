import React from 'react';
import { StatusBar, Text, useColorScheme, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/Components/Home';
import Settings from './src/Components/Settings';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { styled } from 'nativewind';
import Teams from './src/Components/Teams/Teams';
import { SafeAreaView } from 'react-native-safe-area-context';
const Tab = createBottomTabNavigator();

const StyledView = styled(View);
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
        <StatusBar barStyle={'dark-content'} />
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarStyle: {height: "10%"},
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused
                  ? 'home'
                  : 'home-outline';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'settings' : 'settings-outline';
              } else if (route.name === 'Teams') {
                iconName = focused ? 'body' : 'body-outline';
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#006ee6',
            tabBarInactiveTintColor: '#00254d',
          })}
        >
          <Tab.Screen options={{
            headerShown: false,
          }
          } name="Home" component={Home} />
            <Tab.Screen options={{
              headerShown: false,
            }} name="Teams" component={Teams} />
          <Tab.Screen options={{
            headerShown: false,
          }} name="Settings" component={Settings} />
        </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
