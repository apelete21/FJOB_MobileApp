import { Image, Pressable, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { colors } from '../../constants'
import { Button } from '../../components'
import { useNavigation } from '@react-navigation/native'
import { imgs } from '../../images'
import { styles } from './signup.styles'

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
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollcontainer}>
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
                            <TextInput placeholder='***************' style={styles.inputcomponent} textContentType='password' secureTextEntry />
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
            </View>
        </>
    )
}
