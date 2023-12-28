import { Image, Pressable, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { colors } from '../../constants'
import { Button } from '../../components'
import { useNavigation } from '@react-navigation/native'
import { imgs } from '../../images'
import { styles } from './passwordupdate.style'

export function PasswordUpdate() {
    const navigation = useNavigation()

    function goConfirm() {
        navigation.navigate('confirm')
    }
    function goBack() {
        navigation.goBack()
    }
    return (
        <>
            <StatusBar style='auto' />
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollcontainer}>
                    <Text style={styles.headtext}>Update your password</Text>
                    <Text style={styles.subText}>Enter your email to receive the identity confirmation code</Text>
                    <View style={styles.formcontainer}>
                        <View style={styles.forminputcontainer}>
                            <Text style={styles.inputTitle}>Email</Text>
                            <TextInput placeholder='example@gmail.com' style={styles.inputcomponent} />
                        </View>
                        <View style={styles.btnContainer}>
                            <Button name={"Receive the code"} onPress={goConfirm} />
                            <Button style={{
                                backgroundColor: colors.fourth
                            }}
                                fontStyle={{
                                    color: colors.dark
                                }}
                            name={"Cancel"} onPress={goBack} />
                        </View>
                    </View>
                </ScrollView>
            </View>
        </>
    )
}
