import React from 'react';
import { StatusBar, Text, useColorScheme, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/Component/Home';
import Settings from './src/Component/Settings';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { styled } from 'nativewind';
import Teams from './src/Component/Teams/Teams';
const Tab = createBottomTabNavigator();

const StyledView = styled(View);
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <StyledView className="h-screen">
        <StatusBar barStyle={'dark-content'} />
        <Tab.Navigator
          screenOptions={({ route }) => ({
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
      </StyledView>
    </NavigationContainer>
  );
};

export default App;
