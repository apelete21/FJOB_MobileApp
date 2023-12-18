import { StyleSheet } from "react-native";
import { colors, font } from "../../constants";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        flexDirection: "column",
        backgroundColor: colors.white,
    },
    scrollcontainer: {
        // flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        flexDirection: "column",
        paddingTop: 120,
        paddingBottom: 70
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
        marginBottom: 45
    },
    formcontainer: {
        width: "100%",
        paddingHorizontal: "5%",
    },
    forminputcontainer: {
        marginBottom: 20,
    },
    inputTitle: {
        fontFamily: font.p8,
        color: colors.tertiary,
        marginBottom: 10,
    },
    inputcomponent: {
        paddingHorizontal: 21,
        paddingVertical: 16,
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
        fontSize: 14,
        fontFamily: font.p5
    },
    termGreen: {
        color: colors.primary,
        textDecorationLine: 'underline',
    },
    btnContainer: {
        marginBottom: 80,
        marginTop: 40,
    },
    otheroptions: {
        flexDirection: 'row',
        gap: 21,
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
        marginVertical: 50,
        flexDirection: 'row',
        justifyContent: "space-evenly",
        width: "70%",
    },
    authIcon: {
        width: 30,
        height: 30,
    },
    haveanaccount: {
        alignItems: "center",
    },
    haveanaccountText: {
        fontSize: 14,
        fontFamily: font.p5
    },
    haveanaccountTextGreen: {
        fontSize: 14,
        fontFamily: font.p5,
        color: colors.primary,
        textDecorationLine: 'underline',
        marginBottom: 0
    },
})