import React from 'react'
import styles from './styles'
import { View, Text, ImageBackground, KeyboardAvoidingView, Platform, Image, TouchableOpacity } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Feather as Icon, FontAwesome } from '@expo/vector-icons'

const Administrator = () => {
    const navigation = useNavigation()

    function handleNavigateBack() {
        navigation.goBack()
    }

    return (

        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <ImageBackground
            source={require('../../assets/background.png')}
            style={styles.container}
            imageStyle={{ width: 274, height: 368}}>
                <TouchableOpacity onPress={handleNavigateBack}>
                        <Icon style={styles.iconLogout} name="log-out" size={25} />
                </TouchableOpacity>
                <View style={styles.main}>
                    <Image source={require('../../assets/logo.png')}/>
                    <View>
                        <Text style={styles.title}>Contate o administrador do 3E APP em caso de dúvidas.</Text>
                        <Text style={styles.description}>E-mail: contato3EApp@gmail.com</Text>
                    </View>
                </View>
            </ImageBackground>
        </KeyboardAvoidingView>
    
    )
}

export default Administrator