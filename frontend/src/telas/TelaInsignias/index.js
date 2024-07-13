import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

// svg
import Cinema from '../../imagens/telaPontos/cinema.svg';
import Food from '../../imagens/telaPontos/food.svg';
import Cart from '../../imagens/telaPontos/cart.svg';
import Perfume from '../../imagens/telaPontos/perfume.svg';
import Coin from '../../imagens/telaPontos/coin.svg';

export default function TelaInsignias() {
  const navigation = useNavigation();

  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const handleBack = () => {
    navigation.navigate('TelaPontos'); 
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={handleBack}>
            <Ionicons name="arrow-back" size={28} color="#004D85" />
          </TouchableOpacity>
          <Text style={styles.title}>Insígnias</Text>
          <View style={styles.backButtonPlaceholder} />
        </View>

        <View style={styles.profileContainer}>
          <Image style={styles.headerImage} source={require('../../imagens/perfil/woman.jpg')} />
          <View style={styles.userInfo}>
            <View style={styles.userRow}>
              <Text style={styles.userName}>Alana Tavares</Text>
              <Text style={styles.userPoints}>4/100</Text>
            </View>
            <Text style={styles.description}>
              Complete missões para receber insígnias, ganhe insígnias para receber prêmios especiais
            </Text>
          </View>
        </View>
      </View>
      
      <View style={styles.badgesContainer}>
        <View style={styles.row}>
          <View style={styles.badge}>
            <Cinema height='60' width='60' />
            <Text style={styles.badgeText}>Cinéfilo</Text>
          </View>
          <View style={styles.badge}>
            <Food height='60' width='60' />
            <Text style={styles.badgeText}>FoodLover</Text>
          </View>
          <View style={styles.badge}>
            <Cart height='60' width='60' />
            <Text style={styles.badgeText}>Super Shopper</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.badge}>
            <Perfume height='60' width='60' />
            <Text style={styles.badgeText}>Amante de Perfume</Text>
          </View>
          <View style={styles.badgeLocked}>
            <FontAwesome name="lock" size={32} color="rgba(94, 94, 94, 0.29)" />
          </View>
          <View style={styles.badgeLocked}>
            <FontAwesome name="lock" size={32} color="rgba(94, 94, 94, 0.29)" />
          </View>
        </View>
        {showMore && (
          <>
            <View style={styles.row}>
              <View style={styles.badgeLocked}>
                <FontAwesome name="lock" size={32} color="rgba(94, 94, 94, 0.29)" />
              </View>
              <View style={styles.badgeLocked}>
                <FontAwesome name="lock" size={32} color="rgba(94, 94, 94, 0.29)" />
              </View>
              <View style={styles.badgeLocked}>
                <FontAwesome name="lock" size={32} color="rgba(94, 94, 94, 0.29)" />
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.badgeLocked}>
                <FontAwesome name="lock" size={32} color="rgba(94, 94, 94, 0.29)" />
              </View>
              <View style={styles.badgeLocked}>
                <FontAwesome name="lock" size={32} color="rgba(94, 94, 94, 0.29)" />
              </View>
              <View style={styles.badgeLocked}>
                <FontAwesome name="lock" size={32} color="rgba(94, 94, 94, 0.29)" />
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.badgeLocked}>
                <FontAwesome name="lock" size={32} color="rgba(94, 94, 94, 0.29)" />
              </View>
              <View style={styles.badgeLocked}>
                <FontAwesome name="lock" size={32} color="rgba(94, 94, 94, 0.29)" />
              </View>
              <View style={styles.badgeLocked}>
                <FontAwesome name="lock" size={32} color="rgba(94, 94, 94, 0.29)" />
              </View>
            </View>
          </>
        )}
      </View>

      <TouchableOpacity style={styles.showMoreButton} onPress={handleShowMore}>
        <Text style={styles.showMoreText}>{showMore ? 'Ver menos' : 'Ver mais'}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 0, 
    backgroundColor: '#004D85', 
    alignItems: 'center',
  },
  headerContainer: {
    width: '100%',
    paddingHorizontal: 20, 
    backgroundColor: '#F9F9F9',
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 30,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  headerImage: {
    width: 80,
    height: 80,
    borderRadius: 45.5,
    borderWidth: 2,  
    borderColor: 'white',
    margin: 10,
    borderWidth: 3,
    borderColor: '#76B9D3',
  },
  backButton: {
    alignSelf: 'flex-end',
  },
  backButtonPlaceholder: {
    width: 28,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#004D85',
    textAlign: 'center',
    flex: 1,
    marginTop: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 35,
    width: '100%',
  },
  userImagePlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ccc',
    marginRight: 10,
  },
  userInfo: {
    flex: 1,
    marginLeft: 10,
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  userName: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#004D85',
    marginRight: 5,
  },
  userPoints: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#E24443',
  },
  description: {
    fontSize: 15,
    color: '#3C3A3A',
    marginTop: 5,
  },
  badgesContainer: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 45, 
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  badge: {
    width: 100,
    height: 100,
    backgroundColor: '#FFF',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E24443',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
    margin: 5,
  },
  badgeLocked: {
    width: 100,
    height: 100,
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#CCC',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
    margin: 5,
  },
  badgeText: {
    marginTop: 5,
    fontSize: 13,
    color: '#3C3A3A',
    textAlign: 'center',
  },
  showMoreButton: {
    marginTop: 20,
    marginBottom: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#FFF',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  showMoreText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#E24443',
  },
});