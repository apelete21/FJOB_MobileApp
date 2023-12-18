import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors, font } from '../constants'

export function Button({ name, style, onPress }) {
    return (
        <TouchableOpacity style={{ ...styles.startBtn, style }} onPress={onPress}>
            <Text style={styles.startText}>
                {name}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    startBtn: {
        width: "100%",
        backgroundColor: colors.primary,
        paddingVertical: 10,
        borderRadius: 30
    },
    startText: {
        textAlign: "center",
        color: colors.white,
        fontFamily: font.p6,
        textTransform: "capitalize",
        fontSize: 19
    }
})