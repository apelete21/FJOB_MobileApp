import { Image, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Tabsheader } from '../../components'
import { colors, font } from '../../constants'
import { imgs } from '../../images'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export function Settings() {
    const [value, setValue] = useState(false)

    return (
        <View style={styles.container}>
            <Tabsheader useBackBtn hideRightHeader />

            <Text style={styles.headerText}>Settings</Text>
            <View style={styles.itemsContainer}>
                <TouchableOpacity style={styles.menuItem}>
                    <Image source={imgs.user} resizeMode='contain' style={styles.icon} />
                    <Text style={styles.menuText}>Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <MaterialCommunityIcons name='brightness-6' size={50} color={colors.primary} style={styles.icon} />
                    <Text style={styles.menuText}>Dark mode</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <MaterialCommunityIcons name='briefcase-check-outline' size={50} color={colors.primary} style={styles.icon} />
                    <Text style={styles.menuText}>My applications</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.menuItem, { justifyContent: 'space-between' }]} onPress={() => setValue(!value)}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                        <MaterialCommunityIcons name='bell-outline' size={50} color={colors.primary} style={styles.icon} />
                        <Text style={styles.menuText}>Notifications</Text>
                    </View>
                    <View>
                        <Switch value={value} thumbColor={colors.primary} trackColor={{true: colors.greenLight}} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <MaterialCommunityIcons name='tag-multiple-outline' size={50} color={colors.primary} style={styles.icon} />
                    <Text style={styles.menuText}>Saved</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <MaterialCommunityIcons name='shield-check-outline' size={50} color={colors.primary} style={styles.icon} />
                    <Text style={styles.menuText}>Privacy & policy</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <MaterialCommunityIcons name='chat-outline' size={50} color={colors.primary} style={styles.icon} />
                    <Text style={styles.menuText}>Language</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <MaterialCommunityIcons name='logout' size={50} color={colors.primary} style={styles.icon} />
                    <Text style={styles.menuText}>Déconnexion</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.tabsBg
    },
    headerText: {
        fontFamily: font.p6,
        fontSize: 30,
        maxWidth: "65%",
        paddingHorizontal: 15,
        marginTop: 20
    },
    itemsContainer: {
        gap: 15,
        marginTop: 10
    },
    menuItem: {
        flexDirection: "row",
        shadowColor: "rgba(0,0,0,0.3)",
        elevation: 10,
        backgroundColor: colors.white,
        marginHorizontal: 15,
        padding: 15,
        gap: 15,
        alignItems: "center",
        borderRadius: 20
    },
    icon: {
        width: 50,
        height: 50,
    },
    menuText: {
        fontFamily: font.p5,
        fontSize: 17
    }
})