import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';


export default function TelaPontos() {
  const [showRanking, setShowRanking] = useState(true);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>PONTOS</Text>
        <View style={styles.profileSection}>
          <View>
            <Text style={styles.greeting}>Olá, Alana!</Text>
            <Text style={styles.welcome}>Bem-vinda!</Text>
          </View>
          <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.profileImage} />
        </View>
      </View>

      <View style={styles.progressSection}>
        <View style={styles.progressTextContainer}>
          <Text style={[styles.progressText, {fontWeight: 'bold'}]} >Parabéns, Alana!</Text>
          <Text style={styles.progressText} >Veja seu progresso</Text>
        </View>
        <View style={styles.progressDetails}>
          <View>
            <Text>Pontos</Text>          
            <Text style={styles.points}>500</Text>
          </View>
          <Text style={styles.level}>Nível 1</Text>
        </View>
      </View>

      <View style={styles.badgesSection}>
        <Text style={styles.badgesTitle}>Insígnias</Text>
        <View style={styles.badges}>
          <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.badgeImage} />
          <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.badgeImage} />
          <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.badgeImage} />
          <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.badgeImage} />
        </View>
      </View>

      <View style={styles.balanceSection}>
        <Text style={styles.balanceTitle}>Você tem: R$0,00</Text>
        <View style={styles.balanceDetails}>
          <Text style={styles.balanceItem}>Supercashback: R$0,00</Text>
          <Text style={styles.balanceItem}>Cashback: R$0,00</Text>
        </View>
      </View>

      <View style={styles.benefitsSection}>
        <Text style={styles.benefitsTitle}>Benefícios do nível</Text>
        <View style={styles.benefits}>
          <View style={styles.benefitItem}>
            <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.benefitImage} />
            <Text style={styles.benefitText}>Cápsula Nespresso</Text>
            <Text style={styles.benefitPoints}>800 pontos</Text>
          </View>
          <View style={styles.benefitItem}>
            <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.benefitImage} />
            <Text style={styles.benefitText}>Estacionamento Free 1x</Text>
            <Text style={styles.benefitPoints}>Grátis</Text>
          </View>
        </View>
      </View>

      <View style={styles.toggleSection}>
        <TouchableOpacity style={styles.toggleButton} onPress={() => setShowRanking(true)}>
          <Text style={styles.toggleText}>Ranking</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.toggleButton} onPress={() => setShowRanking(false)}>
          <Text style={styles.toggleText}>Atividades Realizadas</Text>
        </TouchableOpacity>
      </View>

      {showRanking ? (
        <View style={styles.content}>
          <Text style={styles.contentTitle}>Ranking</Text>
          <View style={styles.rankingItem}>
            <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.rankingImage} />
            <Text style={styles.rankingText}>1º Você - 500 pontos - Nível 1</Text>
          </View>
          <View style={styles.rankingItem}>
            <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.rankingImage} />
            <Text style={styles.rankingText}>2º Gabriela - 450 pontos - Nível 1</Text>
          </View>
          <View style={styles.rankingItem}>
            <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.rankingImage} />
            <Text style={styles.rankingText}>3º Gustavo - 300 pontos - Nível 1</Text>
          </View>
        </View>
      ) : (
        <View style={styles.content}>
          <Text style={styles.contentTitle}>Atividades Realizadas</Text>
          <Text style={styles.activityText}>09/07 - Visitou o shopping +70 pontos</Text>
          <Text style={styles.activityText}>08/07 - Compartilhou a app com um amigo +25 pontos</Text>
          <Text style={styles.activityText}>08/07 - Foi ao cinema com um amigo +50 pontos</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 225,
    backgroundColor: '#76B9D3',
    padding: 50,
    marginBottom: 20,
  },
  headerText: {
    color: '#004D85',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 10,
    },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  greeting: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  welcome: {
    color: '#fff',
    fontSize: 16,
  },
  profileImage: {
    width: 75,
    height: 75,
    borderRadius: 50,
    marginLeft: 10,
    borderColor: '#fff',
    borderWidth: 2,
  },
  progressSection: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 50,
    marginBottom: 20,
    marginTop: 180,
  },
  progressTextContainer: {
    flexDirection: 'column',
    marginBottom: 10,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressText: {
    fontSize: 18,
    color: '#004D85',
  },
  progressDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FE3131',
    padding: 20,
    justifyContent: 'space-between',
    borderRadius: 10,
  },
  points: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  level: {
    fontSize: 16,
    color: '#fff',
    marginLeft: 10,
  },
  badgesSection: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  badgesTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  badges: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  badgeImage: {
    width: 50,
    height: 50,
  },
  balanceSection: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  balanceTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  balanceDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  balanceItem: {
    fontSize: 16,
  },
  benefitsSection: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  benefitsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  benefits: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  benefitItem: {
    alignItems: 'center',
  },
  benefitImage: {
    width: 50,
    height: 50,
  },
  benefitText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },
  benefitPoints: {
    fontSize: 12,
    color: '#F2911C',
  },
  toggleSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  toggleButton: {
    padding: 10,
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
  },
  toggleText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
  contentTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  rankingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  rankingImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  rankingText: {
    fontSize: 16,
  },
  activityText: {
    fontSize: 16,
    marginBottom: 10,
  },
});