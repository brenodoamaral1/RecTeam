import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function TelaMenu() {
  const [appIsReady, setAppIsReady] = useState(true);
  const [selectedButton, setSelectedButton] = useState(null); 
  const [submenuContent, setSubmenuContent] = useState([]);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      
    }
  }, [appIsReady]);

  const handleButtonPress = (buttonName) => {
    if (selectedButton === buttonName) {
      setSelectedButton(null); 
      setSubmenuContent([]);
    } else {
      setSelectedButton(buttonName);
      switch (buttonName) {
        case 'Extrato':
          setSubmenuContent([
            { label: 'Seu saldo', icon: 'money' },
            { label: 'Enviar notas', icon: 'plus' },
            { label: 'Minhas notas', icon: 'list-alt' },
            { label: 'Lojas participantes', icon: 'shopping-bag' },
          ]);
          break;
        case 'Benefícios':
          setSubmenuContent([
            { label: 'Viva Presente', icon: 'gift' },
            { label: 'Cliente Viva Mais', icon: 'diamond' },
            { label: 'Cupons', icon: 'ticket' },
            { label: 'Experiências', icon: 'rocket' },
            { label: 'Promoções', icon: 'tag' },
          ]);
          break;
        case 'Informações':
          setSubmenuContent([
            { label: 'Acesse nosso regulamento', icon: 'book' },
            { label: 'Dúvidas frequentes', icon: 'question-circle' },
            { label: 'Como cadastrar notas fiscais', icon: 'file-text-o' },
          ]);
          break;
        default:
          setSubmenuContent([]);
          break;
      }
    }
  };

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Text style={styles.menuText}>MENU</Text>
      
      <View style={styles.topSection}>
        <View style={styles.userInfo}>
          <Text style={styles.greeting}>Olá, Alana!</Text>
          <TouchableOpacity style={styles.menuButton}>
            <Icon name="user" size={24} color="#004D85" style={styles.icon} />
            <Text style={[styles.menuItem, {marginLeft: 13}]}>Meu perfil</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButton}>
            <Icon name="sign-out" size={24} color="#004D85" style={styles.icon} />
            <Text style={styles.menuItem}>Sair do Viva</Text>
          </TouchableOpacity>
        </View>
         <Image style={styles.headerImage} source={require('../../imagens/perfil/woman.jpg')} />
      </View>

      <View style={styles.separator} />
      
      <View style={styles.buttonContainer}>
        <Text style={styles.saibaText}>Saiba o que fazer</Text>
        <View style={styles.buttonsRow}>
          <TouchableOpacity
            style={[
              styles.button,
              selectedButton === 'Extrato' ? styles.selectedButton : null,
            ]}
            onPress={() => handleButtonPress('Extrato')}
          >
            <Text style={[styles.buttonText, selectedButton === 'Extrato' ? styles.selectedText : null]}>Extrato</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              selectedButton === 'Benefícios' ? styles.selectedButton : null,
            ]}
            onPress={() => handleButtonPress('Benefícios')}
          >
            <Text style={[styles.buttonText, selectedButton === 'Benefícios' ? styles.selectedText : null]}>Benefícios</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              selectedButton === 'Informações' ? styles.selectedButton : null,
            ]}
            onPress={() => handleButtonPress('Informações')}
          >
            <Text style={[styles.buttonText, selectedButton === 'Informações' ? styles.selectedText : null]}>Informações</Text>
          </TouchableOpacity>
        </View>
      </View>

      {selectedButton !== null && (
        <View style={styles.submenu}>
          {submenuContent.map((item, index) => (
            <View key={index}>
              {index > 0 && <View style={styles.separator} />}
              <TouchableOpacity style={styles.submenuItem}>
                <Icon name={item.icon} size={32} color="#7796B5" style={styles.submenuIcon} />
                <Text style={styles.submenuItemText}>{item.label}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  menuText: {
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: 'bold', 
    color: '#004D85',
    alignSelf: 'center',
    marginVertical: 10,
    marginBottom: 50,
    marginTop: 50,
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userInfo: {
    flexDirection: 'column',
  },
  greeting: {
    fontSize: 23,
    fontFamily: 'System',
    fontWeight: 'bold', 
    color: '#E24443',
  },
  headerImage: {
    width: 75,
    height: 75,
    borderRadius: 45.5,
    borderWidth: 2,  
    borderColor: '#E24443',
},
  menuButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  menuItem: {
    fontSize: 15,
    color: '#004D85',
    fontFamily: 'System',
    marginLeft: 8,
    alignSelf: 'center',
  },
  userImagePlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: '#ccc', 
    marginTop: -10,
    marginRight: 20,
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#5E5E5E',
    opacity: 0.33,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'column',
    marginVertical: 20,
  },
  buttonsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',    
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    marginBottom: 10, 
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  saibaText: {
    fontSize: 22,
    fontFamily: 'System',
    fontWeight: 'bold', 
    color: '#004D85',
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 15,
    fontFamily: 'System',
    fontWeight: 'bold', 
    color: '#E24443',
  },
  selectedButton: {
    backgroundColor: '#76B9D3',
  },
  selectedText: {
    color: '#004D85',
  },
  submenu: {
    marginTop: 20,
    marginLeft: 5,
  },
  submenuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  submenuIcon: {
    marginRight: 10,
  },
  submenuItemText: {
    fontSize: 18,
    fontFamily: 'System',
    color: '#3C3A3A',
  },
});