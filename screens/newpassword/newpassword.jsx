import { Image, Pressable, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { colors } from '../../constants'
import { Button } from '../../components'
import { useNavigation } from '@react-navigation/native'
import { imgs } from '../../images'
import { styles } from './newpassword.styles'
import { setBackgroundColorAsync } from 'expo-navigation-bar'

export function NewPassword() {
    (async function () {
        await setBackgroundColorAsync("transparent")
    })()
    const navigation = useNavigation()

    function goUpdateProfile() {
        navigation.navigate('updateprofile')
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
                            <Text style={styles.inputTitle}>Password</Text>
                            <TextInput placeholder='***************' style={styles.inputcomponent} textContentType='password' secureTextEntry />
                        </View>

                        <View style={styles.forminputcontainer}>
                            <Text style={styles.inputTitle}>Confirm Password</Text>
                            <TextInput placeholder='***************' style={styles.inputcomponent} textContentType='password' secureTextEntry />
                        </View>

                        <View style={styles.btnContainer}>
                            <Button name={"Save password"} onPress={goUpdateProfile} />
                        </View>
                    </View>
                </ScrollView>
            </View>
        </>
    )
}
