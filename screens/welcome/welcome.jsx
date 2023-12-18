import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { imgs } from '../../images'
import { StatusBar } from 'expo-status-bar'
import { styles } from './welcome.styles'
import { useNavigation } from '@react-navigation/native'
import { Button } from '../../components'

export function Welcome() {
    const navigation = useNavigation()
    const goSignUp = () => {
        navigation.navigate("signup")
    }
    return (
        <>
            <StatusBar style='light' />
            <View style={styles.container}>
                <ImageBackground source={imgs.welcome} style={styles.welcome} resizeMode='cover'>
                    <View style={styles.welcome}>
                        <Image style={styles.image} source={imgs.image} resizeMode='cover' />
                    </View>
                </ImageBackground>


                <View style={styles.textContainer} >
                    <View style={styles.headerTextContainer}>

                        <Text style={styles.headerText}>
                            Shape your future
                        </Text>
                        <Text style={styles.headerText}>
                            with job opportunities
                        </Text>
                    </View>
                    <Text style={styles.paragraph}>
                        Discover a vast selection of over 30,000 job to supercharge your carrer path today.
                    </Text>

                    {/* <View style={styles.btnContainer}> */}
                    <Button name={"get started"} onPress={goSignUp} style={{}} />
                    {/* </View> */}
                </View>

            </View>
        </>
    )
}
