import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';

import TelaHome from './TelaHome';
import TelaMissoes from './TelaMissoes';
import TelaPontos from './TelaPontos';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  tabBarIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'rgba(77, 77, 77, 0.46)',
    fontSize: 13,
    fontWeight: '500',
    textAlign: 'center',
  },
});

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 100,
          display: 'flex',
          alignItems: 'center',
        },
      }}
    >
      <Tab.Screen
        name="TelaHome"
        component={TelaHome}
        options={{
          tabBarIcon: () => (null),
          title: '',
          headerTransparent: true,
          headerShown: false,
          tabBarButton: () => null,
        }}
      />
      <Tab.Screen
        name="TelaPontos"
        component={TelaPontos}
        options={{
          tabBarIcon: () => (null),
          title: '',
          headerTransparent: true,
          headerShown: false,
          tabBarButton: () => null,
        }}
      />
      <Tab.Screen
        name="TelaMissoes"
        component={TelaMissoes}
        options={{
          tabBarIcon: () => (null),
          title: '',
          headerTransparent: true,
          headerShown: false,
          tabBarButton: () => null,
        }}
      />
    </Tab.Navigator>
  );
};

function Rotas() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

export default Rotas;