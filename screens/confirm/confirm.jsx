import { Image, Pressable, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { colors, font } from '../../constants'
import { Button } from '../../components'
import { useNavigation } from '@react-navigation/native'
import { imgs } from '../../images'
import { styles } from './confirm.styles'
import { OtpInput } from 'react-native-otp-entry'

export function Confirm() {
    const navigation = useNavigation()

    const goNewPassword = () => {
        navigation.navigate('newpassword')
    }

    return (
        <>
            <StatusBar style='auto' />
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollcontainer}>
                    <Text style={styles.headtext}>Verify Code</Text>
                    <Text style={styles.subText}>Please enter the code we just sent to email 
                    <Text> </Text>
                        <Text style={styles.boldgreen}>example@gmail.com</Text>
                    </Text>
                    <View style={styles.formcontainer}>
                        <View style={styles.otpContainer}>
                            <OtpInput 
                                numberOfDigits={6}
                                focusColor={colors.primary}
                                autoFocus
                                theme={{
                                    pinCodeContainerStyle: {
                                        backgroundColor: colors.fourth,
                                        borderColor: "transparent"
                                    },
                                    pinCodeTextStyle: {
                                        fontWeight: "600"
                                    }
                                }}
                             />
                        </View>
                        <View style={styles.resend}>
                            <Text style={styles.resendText}>
                                <Text>Don’t receive OTP?</Text>
                            </Text>
                            <Text style={styles.resendText}>
                                <Text style={styles.boldgreen}>Resend code</Text>
                            </Text>
                        </View>
                        <View style={styles.btnContainer}>
                            <Button name={"Paste & verify"} onPress={goNewPassword} />
                        </View>
                    </View>                    
                </ScrollView>
            </View>
        </>
    )
}
