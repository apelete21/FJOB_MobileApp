import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { colors, font, viewport } from '../../constants'
import Icons from "@expo/vector-icons/Ionicons"
import { Button } from '../../components'
import { imgs } from '../../images'
import { setBackgroundColorAsync, set } from 'expo-navigation-bar'
import PhoneInput from 'react-native-phone-number-input'

export function UpdateProfile() {
    (async function () {
        await setBackgroundColorAsync(colors.greenLight)
    })()
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
                    </View>
                </ScrollView>
                <View style={styles.btnContainer}>
                    <Button name={"Update my profile"}
                        fontStyle={{
                            textTransform: 'none'
                        }}
                    />
                    <Button name={"Skip for now"}
                        style={{
                            backgroundColor: colors.fourth
                        }}
                        fontStyle={{
                            color: colors.dark,
                            textTransform: "auto"
                        }}
                    />
                </View>

            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    header: {
        paddingHorizontal: "5%",
    },
    scrollviewContainer: {
        paddingHorizontal: "5%",
        paddingBottom: 100,
        // marginBottom: -30,
        flex: 1,
    },
    pictureInputContainer: {
        flexDirection: "row",
        gap: 20,
        alignItems: "center",
        paddingVertical: 30
    },
    imagePicker: {
        flex: 1,
    },
    imgContainer: {
        width: 160,
        height: 160,
        borderRadius: 9999,
        overflow: "hidden"
    },
    prIcon: {
        width: "100%",
        height: "100%"
    },
    pickerBtnContainer: {
        flex: 1
    },
    headerText: {
        fontSize: 25,
        fontFamily: font.p6,
        marginBottom: 10
    },
    subText: {
        fontSize: 14,
        fontFamily: font.p4,
        color: colors.secondary,
        marginBottom: viewport.height * 0.02
    },
    forminputcontainer: {
        marginBottom: viewport.height * 0.015,
    },
    inputTitle: {
        fontFamily: font.p8,
        color: colors.tertiary,
        marginBottom: viewport.height * 0.0035,
    },
    inputcomponent: {
        paddingHorizontal: viewport.height * 0.015,
        paddingVertical: viewport.width * 0.025,
        backgroundColor: colors.fourth,
        borderRadius: 10,
    },
    btnContainer: {
        paddingBottom: viewport.height * 0.02,
        paddingTop: viewport.height * 0.03,
        gap: 15,
        paddingHorizontal: "5%",
        backgroundColor: colors.greenLight,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
})