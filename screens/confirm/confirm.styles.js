import { StyleSheet } from "react-native";
import { colors, font, viewport } from "../../constants";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        flexDirection: "column",
        backgroundColor: colors.white,
    },
    scrollcontainer: {
        justifyContent: "center",
        alignItems: 'center',
        flexDirection: "column",
        paddingTop: viewport.height * 0.05,
        paddingBottom: viewport.height * 0.05
    },
    headtext: {
        fontSize: 25,
        fontFamily: font.p6,
        marginBottom: 20
    },
    subText: {
        fontSize: 14,
        fontFamily: font.p4,
        color: colors.secondary,
        marginHorizontal: "17%",
        textAlign: "center",
        marginBottom: viewport.height * 0.02
    },
    formcontainer: {
        width: "100%",
        paddingHorizontal: "5%",
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
    checkboxContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        gap: 18,
        marginTop: 10,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: colors.primary,
    },
    terms: {
        fontSize: 12,
        fontFamily: font.p5
    },
    boldgreen: {
        color: colors.primary,
        textDecorationLine: 'underline',
        fontFamily: font.p7
    },
    btnContainer: {
        marginBottom: viewport.height * 0.055,
        marginTop: viewport.height * 0.03,
    },
    otheroptions: {
        flexDirection: 'row',
        gap: viewport.width * 0.05,
        width: "70%",
        justifyContent: "center",
        alignItems: "center"
    },
    optionText: {
        fontSize: 12,
        fontFamily: font.p4,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: colors.dark
    },
    authoptions: {
        marginVertical: viewport.height * 0.05,
        flexDirection: 'row',
        justifyContent: "space-evenly",
        width: "70%",
    },
    authIcon: {
        width: 30,
        height: 30,
    },
    resend: {
        alignItems: "center",
        flexDirection: "column"
    },
    resendText: {
        fontSize: 14,
        fontFamily: font.p6,
        color: colors.tertiary
    },
    otpContainer: {
        marginTop: 30,
        marginBottom: 50
    }
})