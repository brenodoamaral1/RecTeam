import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default function TelaMissoes() {
  return (
    <View style={styles.container}>
      <Text>Tela Missões</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})