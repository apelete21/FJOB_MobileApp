import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors, font, viewport } from '../constants'
import { useNavigation } from '@react-navigation/native'
import { imgs } from '../images'

export function Button({ name, style, fontStyle, onPress }) {
    return (
        <TouchableOpacity style={{ ...styles.startBtn, ...style }} onPress={onPress}>
            <Text style={{...styles.startText, ...fontStyle}}>
                {name}
            </Text>
        </TouchableOpacity>
    )
}

export function BackBtn() {
    const navigation = useNavigation()
    return (
        <>
            <TouchableOpacity onPress={() => {
                console.log("Going back")
                navigation.goBack()
            }}>
                <Image source={imgs.arleft} resizeMode='cover'  />
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    startBtn: {
        width: "100%",
        backgroundColor: colors.primary,
        paddingVertical: viewport.height * 0.005,
        borderRadius: 30
    },
    startText: {
        textAlign: "center",
        color: colors.white,
        fontFamily: font.p6,
        textTransform: "capitalize",
        fontSize: 17
    }
})