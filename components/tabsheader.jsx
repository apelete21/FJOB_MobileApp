import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { colors, font } from '../constants'
import { imgs } from '../images'

export function Tabsheader({ useBackBtn, hideRightHeader }) {
    const navigation = useNavigation()
    const goBack = () => {
        navigation.goBack()
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.HeaderLeft}>
                    {useBackBtn ? <>
                        <View>
                            <Pressable style={[styles.backIcon]} onPress={goBack}>
                                <Image source={imgs.arleft} style={[{ width: "100%", height: "100%" }]} resizeMode='cover' />
                            </Pressable>
                        </View>
                    </> :
                        <>
                            <Image source={imgs.user} resizeMode='cover' style={styles.userIcon} />
                            <View>
                                <Text style={styles.greetText}>Good morning</Text>
                                <Text style={styles.userName}>Adzohonou Apelete</Text>
                            </View>
                        </>
                    }
                </View>
                <View style={styles.HeaderRight}>
                    {!hideRightHeader && <>
                        <Pressable style={styles.iconContainer}>
                            <Image source={imgs.bell} style={styles.Icon} resizeMode='contain' />
                        </Pressable>
                        <Pressable style={styles.iconContainer}>
                            <Image source={imgs.bars} style={styles.Icon} resizeMode='contain' />
                        </Pressable>
                    </>
                    }
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.tabsBg,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: colors.tabsBg,
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    headerText: {
        fontFamily: font.p6,
        fontSize: 30,
        maxWidth: "60%",
    },
    HeaderLeft: {
        gap: 10,
        flexDirection: "row",
        alignItems: "center"
    },
    userIcon: {
        width: 50,
        height: 50,
    },
    greetText: {
        fontFamily: font.p4,
        fontSize: 12,
        color: colors.tertiary
    },
    userName: {
        fontFamily: font.p6
    },
    HeaderRight: {
        flexDirection: "row",
        gap: 20,
        alignItems: "center",
    },
    iconContainer: {
        width: 50,
        height: 50,
        backgroundColor: colors.iconbg,
        borderRadius: 999,
        alignItems: 'center',
        justifyContent: 'center'
    },
    backIcon: {
        width: 30,
        height: 30,
        borderRadius: 999,
        alignItems: 'center',
    },
    Icon: {
        width: "50%",
        height: "50%",
    }
})