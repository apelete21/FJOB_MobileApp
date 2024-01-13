import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { colors, font, viewport } from '../../constants'
import Icons from "@expo/vector-icons/Ionicons"
import { Button } from '../../components'
import { imgs } from '../../images'
import { setBackgroundColorAsync, set } from 'expo-navigation-bar'
import PhoneInput from 'react-native-phone-number-input'
import { styles } from './updateprofile.styles'
import { useNavigation } from '@react-navigation/native'

export function UpdateProfile() {
    (async function () {
        await setBackgroundColorAsync(colors.greenLight)
    })()
    const navigation = useNavigation()
    const goTabs = () =>{
        navigation.navigate("tabs")
    }
    return (
        <>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>
                        Complete your profile
                    </Text>
                    <Text style={styles.subText}>Enter your profile information may help us improve interesting job for you.</Text>
                </View>
                <ScrollView style={styles.scrollviewContainer}>
                    <View style={styles.pictureInputContainer}>
                        <View style={styles.imagePicker}>
                            <View style={styles.imgContainer}>
                                {/* <Icons name='person-circle-outline' color={colors.tertiary} size={30} style={styles.prIcon} /> */}
                                <Image source={imgs.welcome} resizeMode='cover' style={styles.prIcon} />
                            </View>
                        </View>
                        <View style={styles.pickerBtnContainer}>
                            <Button name={"Upload a picture"}
                                style={{
                                    backgroundColor: colors.fourth
                                }}
                                fontStyle={{
                                    color: colors.dark,
                                    textTransform: 'none'
                                }}
                            />
                        </View>
                    </View>
                    <View style={styles.forminputcontainer}>
                        <Text style={styles.inputTitle}>Phone Number</Text>
                        <PhoneInput
                            // autoFocus
                            defaultCode="TG"
                            placeholder='90000000'
                            withDarkTheme
                            containerStyle={{
                                ...styles.inputcomponent,
                                width: "100%",
                                backgroundColor: colors.fourth,
                                paddingVertical: 0,
                                paddingHorizontal: 0
                            }}
                            codeTextStyle={{
                                paddingHorizontal: 15,
                            }}
                            textContainerStyle={{
                                backgroundColor: colors.transparent,
                            }}
                            textInputStyle={{
                                color: colors.dark,
                            }}
                            flagButtonStyle={{
                                display: "none"
                            }}
                            textInputProps={{
                                placeholderTextColor: colors.tertiary
                            }}
                        />
                    </View>
                    <View style={styles.forminputcontainer}>
                        <Text style={styles.inputTitle}>Address</Text>
                        <TextInput placeholder="175 Avenue RestRooff, Lomé, Togo" style={styles.inputcomponent} />
                    </View>
                    <View style={styles.forminputcontainer}>
                        <Text style={styles.inputTitle}>Domain</Text>
                        <TextInput placeholder='Ex. IT & computer science' style={styles.inputcomponent} />
                    </View>

                    <View style={styles.forminputcontainer}>
                        <Text style={styles.inputTitle}>Profession</Text>
                        <TextInput placeholder='Ex. React & React Native Developer' style={styles.inputcomponent} />
                    </View>
                    <View style={styles.forminputcontainer}>
                        <Text style={styles.inputTitle}>Your resume - CV </Text>
                        <View style={styles.pdfInputContainer}>
                            <Image source={imgs.pdf} resizeMode='contain' style={styles.pdfImage} />
                            <Text style={styles.pdfName}>Resume.pdf</Text>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.btnContainer}>
                    <Button name={"Update my profile"}
                        fontStyle={{
                            textTransform: 'none'
                        }}
                        onPress={goTabs}
                        />
                    <Button name={"Skip for now"}
                        style={{
                            backgroundColor: colors.fourth
                        }}
                        fontStyle={{
                            color: colors.dark,
                            textTransform: "none"
                        }}
                        onPress={goTabs}
                    />
                </View>

            </View>
        </>
    )
}
