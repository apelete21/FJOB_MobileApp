import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { colors, font } from '../../constants'
import { Button } from '../../components'
import { useNavigation } from '@react-navigation/native'
import { imgs } from '../../images'

export function Signup() {
    const navigation = useNavigation()
    const [terms, setTerms] = useState(false)

    function toggleTerms() {
        setTerms(!terms)
    }

    function goConfirm() {
        navigation.navigate('confirm')
    }
    function goSignIn() {
        navigation.navigate("signin")
    }
    return (
        <>
            <StatusBar style='auto' />
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.headtext}>Create account</Text>
                <Text style={styles.subText}>Fill your information bellow or register with a social account</Text>
                <View style={styles.formcontainer}>
                    <View style={styles.forminputcontainer}>
                        <Text style={styles.inputTitle}>Name</Text>
                        <TextInput placeholder='Ex. John Doe' style={styles.inputcomponent} />
                    </View>
                    <View style={styles.forminputcontainer}>
                        <Text style={styles.inputTitle}>Email</Text>
                        <TextInput placeholder='example@gmail.com' style={styles.inputcomponent} />
                    </View>
                    <View style={styles.forminputcontainer}>
                        <Text style={styles.inputTitle}>Password</Text>
                        <TextInput placeholder='***************' style={styles.inputcomponent} />
                    </View>
                    <View style={styles.checkboxContainer}>
                        <Pressable style={{ ...styles.checkbox, backgroundColor: terms ? colors.primary : colors.fourth }} onPress={toggleTerms} />
                        <View>
                            <Text style={styles.terms}>
                                Agree with <Text style={styles.termGreen}>Terms & conditions</Text>
                            </Text>
                        </View>
                    </View>
                    <View style={styles.btnContainer}>
                        <Button name={"Sign Up"} onPress={goConfirm} />
                    </View>
                </View>
                <View style={styles.otheroptions}>
                    <View style={styles.line} />
                    <Text style={styles.optionText}>
                        Or Sign Up with
                    </Text>
                    <View style={styles.line} />
                </View>
                <View style={styles.authoptions}>
                    <TouchableOpacity>
                        <Image source={imgs.apple} style={styles.authIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={imgs.google} style={styles.authIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={imgs.facebook} style={styles.authIcon} />
                    </TouchableOpacity>
                </View>
                <View style={styles.haveanaccount}>
                    <Text style={styles.haveanaccountText}>
                        <Text>Already have an account?</Text>
                        {/* <Pressable> */}
                        <Text style={styles.haveanaccountTextGreen} onPress={goSignIn}> Sign In</Text>
                        {/* </Pressable> */}
                    </Text>
                </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        flexDirection: "column",
        backgroundColor: colors.white,
    },
    headtext: {
        fontSize: 25,
        fontFamily: font.p6,
        marginBottom: 20
    },
    subText: {
        fontSize: 14,
        fontFamily: font.p4,
        color: colors.secondary,
        marginHorizontal: "17%",
        textAlign: "center",
        marginBottom: 45
    },
    formcontainer: {
        width: "100%",
        paddingHorizontal: "5%",
    },
    forminputcontainer: {
        marginBottom: 20,
    },
    inputTitle: {
        fontFamily: font.p8,
        color: colors.tertiary,
        marginBottom: 10,
    },
    inputcomponent: {
        paddingHorizontal: 21,
        paddingVertical: 16,
        backgroundColor: colors.fourth,
        borderRadius: 10,
    },
    checkboxContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        gap: 18,
        marginTop: 10,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: colors.primary,
    },
    terms: {
        fontSize: 14,
        fontFamily: font.p5
    },
    termGreen: {
        color: colors.primary,
        textDecorationLine: 'underline',
    },
    btnContainer: {
        marginBottom: 80,
        marginTop: 40,
    },
    otheroptions: {
        flexDirection: 'row',
        gap: 21,
        width: "70%",
        justifyContent: "center",
        alignItems: "center"
    },
    optionText: {
        fontSize: 12,
        fontFamily: font.p4,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: colors.dark
    },
    authoptions: {
        marginVertical: 50,
        flexDirection: 'row',
        justifyContent: "space-evenly",
        width: "70%",
    },
    authIcon: {
        width: 30,
        height: 30,
    },
    haveanaccount: {
        alignItems: "center",
    },
    haveanaccountText: {
        fontSize: 14,
        fontFamily: font.p5
    },
    haveanaccountTextGreen: {
        fontSize: 14,
        fontFamily: font.p5,
        color: colors.primary,
        textDecorationLine: 'underline',
        marginBottom: 0
    },
})