import { Image, Pressable, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { colors } from '../../constants'
import { Button } from '../../components'
import { useNavigation } from '@react-navigation/native'
import { imgs } from '../../images'
import { styles } from './signin.styles'

export function SignIn() {
    const navigation = useNavigation()

    function goConfirm() {
        navigation.navigate('confirm')
    }
    function goRetrievePass() {
        navigation.navigate('passwordupdate')
    }
    function goSignUp() {
        navigation.navigate("signup")
    }
    return (
        <>
            <StatusBar style='auto' />
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollcontainer}>
                    <Text style={styles.headtext}>Log into your account</Text>
                    <Text style={styles.subText}>Hi! Welcome back, you’ve been missed</Text>
                    <View style={styles.formcontainer}>
                        <View style={styles.forminputcontainer}>
                            <Text style={styles.inputTitle}>Email</Text>
                            <TextInput placeholder='example@gmail.com' style={styles.inputcomponent} />
                        </View>
                        <View style={styles.forminputcontainer}>
                            <Text style={styles.inputTitle}>Password</Text>
                            <TextInput placeholder='***************' style={styles.inputcomponent} textContentType='password' secureTextEntry />
                        </View>
                        <TouchableOpacity onPress={goRetrievePass}>
                            <Text style={styles.passRetrievelink}>Forgot password ?</Text>
                        </TouchableOpacity>
                        <View style={styles.btnContainer}>
                            <Button name={"Sign In"} onPress={goConfirm} />
                        </View>
                    </View>
                    <View style={styles.otheroptions}>
                        <View style={styles.line} />
                        <Text style={styles.optionText}>
                            Or Sign In with
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
                            <Text>Don't have an account?</Text>
                            <Text> </Text>
                            <Text style={styles.haveanaccountTextGreen} onPress={goSignUp}>Sign Up</Text>
                        </Text>
                    </View>
                </ScrollView>
            </View>
        </>
    )
}
