import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

// svg
import TrofeuAzul from '../../imagens/telaPontos/trofeuAzul.svg';
import Nivel from '../../imagens/telaPontos/nivel.svg';
import Cinema from '../../imagens/telaPontos/cinema.svg';
import Food from '../../imagens/telaPontos/food.svg';
import Cart from '../../imagens/telaPontos/cart.svg';
import Perfume from '../../imagens/telaPontos/perfume.svg';
import Coin from '../../imagens/telaPontos/coin.svg';

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
          <Text style={[styles.progressText, { fontWeight: 'bold' }]}>Parabéns, Alana!</Text>
          <Text style={styles.progressText}>Veja seu progresso</Text>
        </View>
        <View style={styles.progressDetails}>
          <TrofeuAzul height='40' width='40' />
          <View>
            <Text style={styles.pointsText}>Pontos</Text>
            <Text style={styles.points}>500</Text>
          </View>
          <Nivel style={styles.levelIcon} height='40' width='40' />
          <Text style={styles.level}>Nível</Text>
        </View>
      </View>

      <View style={styles.badgesSection}>
        <View style={styles.badgeSectionText}>
          <Text style={styles.badgesTitle}>Insígnias</Text>
          <TouchableOpacity>
            <Text>Ver todas</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.badges}>
          <Cinema height='60' width='60' />
          <Food height='60' width='60' />
          <Cart height='60' width='60' />
          <Perfume height='60' width='60' />
        </View>
      </View>

      <View style={styles.balanceSection}>
        <Text style={styles.balanceTitle}>Você tem: R$0,00</Text>
        <View style={styles.balanceDetails}>
          <View>
            <Text style={styles.balanceItem}>Supercashback</Text>
            <Text style={styles.balancePrice}>R$0,00</Text>
          </View>
          <View>
            <Text style={styles.balanceItem}>Cashback</Text>
            <Text style={styles.balancePrice}>R$0,00</Text>
          </View>
          <TouchableOpacity style={styles.extractButton}>
            <Text style={styles.extractButtonText}>ver extrato</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.benefitsSection}>
        <View style={styles.benefictsSectionText}>
          <Text style={styles.benefitsTitle}>Benefícios do nível</Text>
          <TouchableOpacity>
            <Text>Ver todos</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.benefits}>
          <View style={styles.benefitItem}>
            <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.benefitImage} />
            <Text style={styles.benefitText}>Cápsula Nespresso</Text>
            <View style={styles.coin}>
              <Coin height='20' width='20' />
              <Text style={styles.benefitPoints}>800 pontos</Text>
            </View>
            <TouchableOpacity style={styles.changeButton}>
              <Text style={{ color: '#fff' }}>Trocar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.benefitItem}>
            <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.benefitImage} />
            <Text style={styles.benefitText}>Estacionamento Free 1x</Text>
            <View style={styles.coin}>
              <Coin height='20' width='20' />
              <Text style={styles.benefitPoints}>Grátis</Text>
            </View>
            <TouchableOpacity style={styles.changeButton}>
              <Text style={{ color: '#fff' }}>Trocar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.toggleSection}>
        <TouchableOpacity onPress={() => setShowRanking(true)}>
          <Text style={[styles.toggleText, showRanking && styles.activeToggleText]}>Ranking</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setShowRanking(false)}>
          <Text style={[styles.toggleText, !showRanking && styles.activeToggleText]}>Atividades</Text>
          <Text style={[styles.toggleText, !showRanking && styles.activeToggleText]}>Realizadas</Text>
        </TouchableOpacity>
      </View>

      {showRanking ? (
        <View style={styles.content}>
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
    shadowColor: '#171717',
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
    borderRadius: 10,
    marginHorizontal: 10,
    marginTop: 15,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  pointsText: {
    color: '#8CB8D1',
  },
  points: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  levelIcon: {
    marginLeft: 100,
  },
  level: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 10,
  },
  badgesSection: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  badgeSectionText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  badgesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#004D85',
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
    backgroundColor: '#ECECEC',
    padding: 40,
    borderRadius: 50,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  balanceTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#004D85',
    marginBottom: 25,
  },
  balanceDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
  },
  balanceItem: {
    fontSize: 16,
    color: '#004D85',
  },
  balancePrice: {
    fontSize: 24,
    color: '#54AE70',
    fontWeight: 'bold',
  },
  extractButton: {
    backgroundColor: '#54AE70',
    padding: 7,
    borderRadius: 20,
    justifyContent: 'center',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  extractButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  benefitsSection: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  benefictsSectionText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  benefitsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#E24443',
    fontSize: 20,
  },
  benefits: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  benefitItem: {
    backgroundColor: '#fff',
    width: 170,
    height: 200,
    borderRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  benefitImage: {
    flex: 1,
    justifyContent: 'flex-end',
    borderRadius: 10,
  },
  benefitText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 5,
    fontSize: 13,
    color: '#004D85',
    fontWeight: 'bold',
  },
  benefitPoints: {
    fontSize: 13,
    color: '#E24443',
    alignSelf: 'center',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  coin: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginTop: 5,
    marginLeft: 5,
  },
  changeButton: {
    backgroundColor: '#E24443',
    alignSelf: 'flex-end',
    marginTop: 5,
    marginBottom: 8,
    marginRight: 8,
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  toggleSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 60,
    marginBottom: 20,
    marginTop: 20,
  },
  toggleButton: {
    padding: 10,
  },
  toggleText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 10,
    color: "#5E5E5E"
  },
  activeToggleText: {
    color: '#004D85',
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
