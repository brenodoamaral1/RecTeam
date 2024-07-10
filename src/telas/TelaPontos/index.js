import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default function TelaPontos() {
  return (
    <View style={styles.container}>
      <Text>Tela Pontos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
})