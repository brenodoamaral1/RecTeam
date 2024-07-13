import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, Platform, View, TextInput, KeyboardAvoidingView, Pressable, TouchableOpacity } from 'react-native';
import CheckBox from 'expo-checkbox';
import { useNavigation } from '@react-navigation/native';

import VivaLogo from '../../imagens/telaLogin/vivaLogo.svg';
import ClosedEye from '../../imagens/telaLogin/closedEye.svg';

export default function TelaLogin() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setChecked] = useState(false);

  const handleLogin = () => {
    // Adicione a lógica de autenticação aqui
    // Se a autenticação for bem-sucedida, navegue para a TabNavigator
    navigation.navigate('TabNavigator');
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
        <View style={styles.logo}>
          <VivaLogo style={styles.logo} />
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="nome de usuário ou e-mail"
            value={email}
            onChangeText={setEmail}
            placeholderTextColor='rgba(77, 77, 77, 0.46)'
          />
          <TextInput
            style={styles.input}
            placeholder="senha"
            value={password}
            onChangeText={setPassword}
            placeholderTextColor='rgba(77, 77, 77, 0.46)'
            secureTextEntry={true}
          />
        </View>
        <View style={styles.section}>
          <CheckBox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
            borderRadius={20}
            backgroundColor={'rgba(255, 255, 255, 1)'}
            color={isChecked ? 'rgba(118, 185, 211, 1)' : undefined}
          />
          <Text style={styles.lembrar}>Lembrar-me</Text>
          <Pressable onPress={() => {}}>
            {({ pressed }) => (
              <Text style={[styles.esqueceu, pressed && styles.pressedText]}>
                Esqueceu a senha?
              </Text>
            )}
          </Pressable>
        </View>
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Platform.OS === 'ios' ? 200 : 100,
    backgroundColor: 'rgba(0, 77, 133, 1)',
    justifyContent: 'center',
    color: 'black',
  },
  logo: {
    justifyContent: 'center',
    alignSelf: 'center',
    height: 120,
    width: 77,
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    marginLeft: 40,
    marginRight: 40,
    marginTop: 20,
    padding: 12,
    borderRadius: 50,
    fontWeight: 'bold',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  checkbox: {
    marginTop: 12,
    marginLeft: 50,
    color: '#B4B4B4',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lembrar: {
    marginTop: 12,
    marginLeft: 5,
    color: 'rgba(255, 255, 255, 1)',
    fontWeight: 'bold',
  },
  esqueceu: {
    marginTop: 12,
    ...Platform.select({
      ios: {
        marginLeft: 50,
      },
      android: {
        marginLeft: 90,
      },
      default: {
        marginLeft: 90,
      },
    }),
    color: 'rgba(255, 255, 255, 1)',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'rgba(118, 185, 211, 1)',
    marginLeft: 100,
    marginRight: 100,
    marginTop: 60,
    paddingVertical: 20,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonText: {
    color: 'rgba(0, 77, 133, 1)',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
