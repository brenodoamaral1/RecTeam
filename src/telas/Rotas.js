import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';

// svg
import MissoesVermelho from '../imagens/navbar/missoesVermelho.svg';
import MissoesBranco from '../imagens/navbar/missoesBranco.svg';
import TrofeuVermelho from '../imagens/navbar/trofeuVermelho.svg';
import TrofeuBranco from '../imagens/navbar/trofeuBranco.svg';
import TresBarrasVermelho from '../imagens/navbar/tresBarrasVermelho.svg';
import TresBarrasBranco from '../imagens/navbar/tresBarrasBranco.svg';

// arquivos das telas
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
    color: 'white',
    fontSize: 13,
    fontWeight: '500',
    textAlign: 'center',
    zIndex: 1
  },
  redTitle: {
    color: '#E24443',
    fontSize: 13,
    fontWeight: '500',
    textAlign: 'center',
    zIndex: 1
  },
  iconMissoes: {
    marginTop: 30,
    zIndex: 1,
  },
  iconPontos: {
    marginTop: 35,
    zIndex: 1,
  },
  iconHome: {
    marginTop: 34,
    zIndex: 1,
  },
  whiteBackground: {
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 40, 
    width: 80,
    height: 80,
    top: 7, 
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0, 
    },
    shadowRadius: 10, 
    elevation: 20, 
    shadowOpacity: 0.25, 
  },
});

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 70,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#E24443',
          borderRadius: 50,
          marginLeft: 18,
          marginRight: 18,
          marginBottom: 25,
          marginTop: 10,
        },
        tabBarIcon: ({ focused }) => {
          let Icon;
          let iconStyle = {};
          let title = "";

          if (route.name === 'TelaMissoes') {
            Icon = focused ? MissoesVermelho : MissoesBranco;
            iconStyle = styles.iconMissoes;
            title = "Missões";
          } else if (route.name === 'TelaPontos') {
            Icon = focused ? TrofeuVermelho : TrofeuBranco;
            iconStyle = styles.iconPontos;
            title = "Pontos";
          } else if (route.name === 'TelaHome') {
            Icon = focused ? TresBarrasVermelho : TresBarrasBranco;
            iconStyle = styles.iconHome;
            title = "Menu";
          }

          return (
            <View style={styles.tabBarIconContainer}>
              {focused && (
                <>
                <View style={styles.whiteBackground}></View>
                <Icon style={iconStyle} height="42" width ="42"/></>
              )}
              {!focused && <Icon height="38" width ="38"style={iconStyle} />}
              <Text style={focused ? styles.redTitle : styles.title}>{title}</Text>
            </View>
          );
        },
      })}
    >
      <Tab.Screen
        name="TelaMissoes"
        component={TelaMissoes}
        options={{
          title: '',
          headerTransparent: true,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="TelaPontos"
        component={TelaPontos}
        options={{
          title: '',
          headerTransparent: true,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="TelaHome"
        component={TelaHome}
        options={{
          title: '',
          headerTransparent: true,
          headerShown: false,
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
