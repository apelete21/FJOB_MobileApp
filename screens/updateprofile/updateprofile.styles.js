import { StyleSheet } from "react-native";
import { colors, font, viewport } from "../../constants";

export const styles = StyleSheet.create({
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
    pdfInputContainer: {
        backgroundColor: colors.fourth,
        padding: 15,
        flexDirection: "row",
        borderRadius: 15,
        gap: 20,
        alignItems: "center"
    },
    pdfName: {
        fontFamily: font.p7,
        color: colors.tertiary,
    }
})