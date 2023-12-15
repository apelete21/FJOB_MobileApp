import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { imgs } from '../../images'
import { colors, font, viewport } from '../../constants'
import { StatusBar } from 'expo-status-bar'
import { styles } from './welcome.styles'

export function Welcome() {
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
                    <TouchableOpacity style={styles.startBtn}>
                        <Text style={styles.startText}>
                            get started
                        </Text>
                    </TouchableOpacity>
                    {/* </View> */}
                </View>

            </View>
        </>
    )
}
