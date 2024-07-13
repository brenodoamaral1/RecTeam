import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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
  const navigation = useNavigation();

  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.header}>
          <Text style={styles.title}>PONTOS</Text>
          <View style={styles.textoImagem}>
              <View style={styles.comprimento}>
                  <Text style={styles.headerText}>Olá, Alana!</Text>
                  <Text style={styles.subHeaderText}>Bem-vinda!</Text>
              </View>
              <View style={styles.shadowContainer}>
                  <Image style={styles.headerImage} source={require('../../imagens/perfil/woman.jpg')} />
              </View>
          </View>
      </View>
    <View style={styles.mainContainer}>
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
          <TouchableOpacity onPress={() => navigation.navigate('TelaInsignias')}>
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
        <View
              style={{
                borderBottomColor: '#54AE70',
                borderBottomWidth: 1,
                marginBottom: 20,
                alignSelf: 'stretch',
                marginHorizontal: -20,
              }}
        />
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
            <Image source={require('../../imagens/telaPontos/capsule.jpg')} style={styles.benefitImage} />
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
            <Image source={require('../../imagens/telaPontos/parking.jpg')} style={styles.benefitImage} />
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
          {showRanking && <View style={styles.activeToggleUnderline}></View>}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setShowRanking(false)}>
          <Text style={[styles.toggleText, !showRanking && styles.activeToggleText]}>Atividades</Text>
          <Text style={[styles.toggleText, !showRanking && styles.activeToggleText]}>Realizadas</Text>
          {!showRanking && <View style={styles.activeToggleUnderline}></View>}
        </TouchableOpacity>
      </View>

      {showRanking ? (
        <View style={styles.content}>
          <View style={styles.rankingImagesTop}>
            <Image source={require('../../imagens/telaPontos/woman2.jpg')} style={styles.rankingImage} />
            <Image source={require('../../imagens/perfil/woman.jpg')} style={styles.rankingImageMiddle} />
            <Image source={require('../../imagens/telaPontos/man.jpg')} style={styles.rankingImage} />
          </View>
          <View style={styles.rankingItem}>
            <View style={{flexDirection: 'row', alignItems: 'center',}}>
            <Text style={styles.rankingNumber}>1</Text>
            <Image source={require('../../imagens/perfil/woman.jpg')} style={styles.rankingImageList} />
            <Text style={styles.rankingName}>Você</Text>
            </View>
            <View>
              <Text style={styles.pointsLevel}>500 Pontos</Text>
              <Text style={[styles.pointsLevel, {color: '#E24443'}]}>Nível 1</Text>
            </View>
          </View>
          <View
              style={{
                borderBottomColor: 'rgba(94,94,94,0.3)',
                borderBottomWidth: StyleSheet.hairlineWidth,
                marginBottom: 10,
              }}
            />
          <View style={styles.rankingItem}>
            <View style={{flexDirection: 'row', alignItems: 'center',}}>
            <Text style={styles.rankingNumber}>2</Text>
            <Image source={require('../../imagens/telaPontos/woman2.jpg')} style={styles.rankingImageList} />
            <Text style={styles.rankingName}>Gabriela</Text>
            </View>
           
            <View>
              <Text style={styles.pointsLevel}>450 Pontos</Text>
              <Text style={[styles.pointsLevel, {color: '#E24443'}]}>Nível 1</Text>
            </View>
          </View>
          <View
              style={{
                borderBottomColor: 'rgba(94,94,94,0.3)',
                borderBottomWidth: StyleSheet.hairlineWidth,
                marginBottom: 10,
              }}
            />
          <View style={styles.rankingItem}>
            <View style={{flexDirection: 'row', alignItems: 'center',}}>
            <Text style={styles.rankingNumber}>3</Text>
            <Image source={require('../../imagens/telaPontos/man.jpg')} style={styles.rankingImageList} />
            <Text style={styles.rankingName}>Gustavo</Text>
            </View>
            <View>
              <Text style={styles.pointsLevel}>300 Pontos</Text>
              <Text style={[styles.pointsLevel, {color: '#E24443'}]}>Nível 1</Text>
            </View>
          </View>
          <TouchableOpacity style={[styles.moreButton]}>
            <Text style={styles.extractButtonText}>ver extrato</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.activityContent}>
          <View style={styles.activityContainer}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.activityDate}>09/07</Text>
              <Text style={styles.activityText}>Visitou o shopping</Text>
            </View>           
            <View>
              <Text style={styles.activityPoints}>+70</Text>
            </View>
          </View>
          <View
              style={{
                borderBottomColor: 'rgba(94,94,94,0.3)',
                borderBottomWidth: StyleSheet.hairlineWidth,
                marginBottom: 10,
              }}
            />
          <View style={styles.activityContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.activityDate}>08/07</Text>
              <Text style={styles.activityText}>Compartilhou o {'\n'} app com 1 amigo</Text>
            </View>           
            <View>
              <Text style={styles.activityPoints}>+70</Text>
            </View>
          </View>
          <View
              style={{
                borderBottomColor: 'rgba(94,94,94,0.3)',
                borderBottomWidth: StyleSheet.hairlineWidth,
                marginBottom: 10,
              }}
            />
          <View style={styles.activityContainer}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.activityDate}>09/07</Text>
              <Text style={styles.activityText}>Visitou o shopping</Text>
            </View>           
            <View>
              <Text style={styles.activityPoints}>+70</Text>
            </View>
          </View>
          <TouchableOpacity style={[styles.moreButton, {backgroundColor: '#76B9D3'}]}>
            <Text style={styles.extractButtonText}>ver extrato</Text>
          </TouchableOpacity>
        </View>
      )}
      </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: "#76B9D3",
  },
  header: {
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 52,
    backgroundColor: "#76B9D3",
  },
  textoImagem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    gap: 25
  },
  comprimento: {
    flexDirection: "column",
  },
  headerImage: {
    width: 75,
    height: 75,
    borderRadius: 45.5,
    borderWidth: 2,  
    borderColor: 'white'
  },
  shadowContainer: {
    paddingTop: 8,
    marginLeft: 110,
    marginRight: 30,
    width: 91,
    height: 91,
    borderRadius: 45.5,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 8,
    },
    shadowRadius: 6,
    elevation: 5,
    shadowOpacity: 0.17
  },
  headerText: {
    fontSize: 19,
    fontWeight: "bold",
    color: 'white',
    marginLeft: 40
  },
  subHeaderText: {
    fontSize: 17,
    color: 'white',
    marginLeft: 40
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#004d85",
    textAlign: "center",
    marginBottom: 10,
  },
  mainContainer: {
    flex: 1,
    paddingVertical: 20,
    backgroundColor: 'white',
    borderTopLeftRadius: 60, // para aplicar border radius apenas nas pontas do container
    borderTopRightRadius: 60
  },
  progressSection: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 60,
    marginBottom: 20,
    // marginTop: 185,
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
    flexDirection: 'column',
    backgroundColor: '#ECECEC',
    padding: 20,
    borderRadius: 50,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  balanceTitle: {
    fontSize: 24,
    fontWeight: 'bold',
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
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: 'auto',
    height: 'auto',
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
  activeToggleUnderline:{
    height: 1.8,
    width: "100%",
    backgroundColor: "#004D85",
    marginTop: 2
  },
  content: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    paddingBottom: 120,
  },
  rankingImagesTop: {
    flexDirection: 'row',
    gap: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  rankingImage:{
    width: 80,
    height: 80,
    borderRadius: 50,
    marginTop: 30,
    borderColor: '#76B9D3',
    borderWidth: 3,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  rankingImageMiddle:{
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: '#FE3131',
    borderWidth: 3,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  rankingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  rankingNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#E24443',
    marginRight: 8,
  },
  rankingImageList: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  rankingName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#3C3A3A',
  },
  pointsLevel: {
    fontSize: 16,
  },
  moreButton: {
    alignSelf: 'center',
    backgroundColor: '#E24443',
    padding: 7,
    marginTop: 20,
    borderRadius: 20,
    justifyContent: 'center',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  activityContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    paddingBottom: 120,
  },
  activityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  activityDate: {
    fontSize: 16,
    fontWeight: '800',
    color: '#E24443',
  },
  activityText: {
    fontSize: 18,
    marginBottom: 10,
    marginLeft: 15,
    color: '#3C3A3A'
  },
  activityPoints:{
    color: '#E24443',
    fontSize: 16,
    fontWeight: '600',
  },
});
