import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 32,
      paddingTop: 20 + Constants.statusBarHeight,
    },

    iconLogout: {
      color: "#34CB79",
      transform: [{rotate: "180deg"}]
    },
  
    title: {
      fontSize: 20,
      fontFamily: 'Ubuntu_700Bold',
      marginTop: 24,
    },
  
    description: {
      color: '#6C6C80',
      fontSize: 16,
      marginTop: 4,
      fontFamily: 'Roboto_400Regular',
    },
  
    mapContainer: {
      flex: 10,
      width: '100%',
      borderRadius: 10,
      overflow: 'hidden',
      marginTop: 10,
    },
  
    map: {
      width: '100%',
      height: '100%',
    },
  
    mapMarker: {
      width: 90,
      height: 80, 
    },
  
    mapMarkerContainer: {
      width: 90,
      height: 70,
      backgroundColor: '#34CB79',
      flexDirection: 'column',
      borderRadius: 8,
      overflow: 'hidden',
      alignItems: 'center'
    },
  
    mapMarkerImage: {
      width: 90,
      height: 45,
      resizeMode: 'cover',
    },
  
    mapMarkerTitle: {
      flex: 1,
      fontFamily: 'Roboto_400Regular',
      color: '#FFF',
      fontSize: 13,
      lineHeight: 23,
    },
  
    itemsContainer: {
      flexDirection: 'row',
      marginTop: 16,
      marginBottom: 32,
    },
  
    item: {
      backgroundColor: '#fff',
      borderWidth: 2,
      borderColor: '#eee',
      height: 95,
      width: 120,
      borderRadius: 8,
      paddingHorizontal: 16,
      paddingTop: 20,
      paddingBottom: 16,
      marginRight: 8,
      alignItems: 'center',
      justifyContent: 'space-between',
  
      textAlign: 'center',
    },
  
    selectedItem: {
      borderColor: '#34CB79',
      borderWidth: 2,
      backgroundColor: '#E1FAEC',
    },
  
    itemTitle: {
      fontFamily: 'Roboto_400Regular',
      textAlign: 'center',
      fontSize: 13,
    },

    textInputDireita: {
      width: 150,
      color: '#6C6C80',
      fontSize: 16,
      fontFamily: 'Roboto_400Regular',
      },

    textInputEsquerda: {
        width: '100%',
        height: 40,
        borderRadius: 30,
        color: '#6C6C80',
        fontSize: 16,
        fontFamily: 'Roboto_400Regular',
    },

      button: {
        backgroundColor: '#34CB79',
        height: 50,
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        marginTop: 20,
      },
    
      buttonIcon: {
        height: 60,
        width: 60,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        justifyContent: 'center',
        alignItems: 'center'
      },
    
      buttonText: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#FFF',
        fontFamily: 'Roboto_500Medium',
        fontSize: 25,
      },

      footer: {},
  });