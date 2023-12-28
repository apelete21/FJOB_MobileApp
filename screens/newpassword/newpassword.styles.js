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
        marginHorizontal: "10%",
        textAlign: "center",
        marginBottom: viewport.height * 0.02
    },
    formcontainer: {
        width: "100%",
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
        marginBottom: viewport.height * 0.055,
        marginTop: viewport.height * 0.06,
        gap: 15
    },
    otheroptions: {
        flexDirection: 'row',
        gap: viewport.width * 0.05,
        width: "80%",
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
    passRetrievelink: {
        fontFamily: font.p7,
        color: colors.primary,
        textDecorationLine: "underline",
        textAlign: "right"
    }
})