import React, { useState } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Alert, KeyboardAvoidingView, Platform, Pressable } from "react-native";
import axios from "axios";
import CheckBox from 'expo-checkbox';
import VivaLogo from '../../imagens/telaLogin/vivaLogo.svg';

const TelaLogin = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [isChecked, setChecked] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.get(
        "https://parseapi.back4app.com/parse/classes/Users",
        {
          headers: {
            'X-Parse-Application-Id': 'lC0VDk2rQxpxMmG42L1gVAlIqKqJYJ6ABVZU4rlL',
            'X-Parse-REST-API-Key': 'hZbNpuTlLGaBiRwTdHwLFSPAqkNpnD7RMfVzGNVE',
            'Content-Type': 'application/json'
          }
        }
      );

      const users = response.data.results;
      let authenticatedUser = null;

      for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (user.email === email && user.senha === senha) {
          authenticatedUser = user;
          break;
        }
      }

      if (authenticatedUser) {
        const previsaoResponse = await axios.get(
          `https://parseapi.back4app.com/parse/classes/Users/${authenticatedUser.objectId}`,
          {
            headers: {
              'X-Parse-Application-Id': 'lC0VDk2rQxpxMmG42L1gVAlIqKqJYJ6ABVZU4rlL',
              'X-Parse-REST-API-Key': 'hZbNpuTlLGaBiRwTdHwLFSPAqkNpnD7RMfVzGNVE',
              'Content-Type': 'application/json'
            }
          }
        );

        const previsao = previsaoResponse.data.previsao;

        // Limpar campos após login bem-sucedido
        setEmail("");
        setSenha("");
        setError("");

        navigation.navigate('TelaMissoes', { previsao });
      } else {
        setError('Credenciais inválidas');
      }
    } catch (error) {
      console.error('Erro de login:', error);
      setError('Falha ao tentar fazer login');
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.logo}>
        <VivaLogo />
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
          value={senha}
          onChangeText={setSenha}
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
          tintColors={{ true: 'rgba(118, 185, 211, 1)', false: undefined }}
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
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </KeyboardAvoidingView>
  );
};

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
    alignItems: 'center',
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
  errorText: {
    color: 'red',
    marginTop: 10,
    textAlign: 'center',
  },
  pressedText: {
    opacity: 0.5,
  },
});

export default TelaLogin;
