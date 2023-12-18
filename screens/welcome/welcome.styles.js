import { StyleSheet } from "react-native"
import { colors, font, viewport } from "../../constants"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    welcome: {
        flex: 1,
        height: "100%"
    },
    image: {
        width: viewport.width,
        height: viewport.height
    },
    textContainer: {
        width: "100%",
        backgroundColor: colors.white,
        marginTop: -25,
        paddingTop: viewport.height * 5 / 100,
        paddingBottom: viewport.height * 2 / 100,
        paddingHorizontal: (viewport.width * 9 / 100),
        alignItems: 'center',
        justifyContent: "center",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
    },
    headerTextContainer: {
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center"
    },
    headerText: {
        fontSize: 25,
        lineHeight: 35,
        textTransform: "capitalize",
        width: "100%",
        fontFamily: font.p6,
        textAlign: "center"
    },
    paragraph: {
        marginTop: viewport.width * 4 / 100,
        marginBottom: 35,
        width: "80%",
        textAlign: 'center',
        fontFamily: font.p3
    }
})