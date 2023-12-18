import { Dimensions } from "react-native";

export const viewport = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
}

export const colors = {
    primary: "#248E42",
    secondary: "#777777",
    tertiary: "rgba(0,0,0, 0.55)",
    fourth: "#F5F5F5",
    white: "#fff",
    dark: "#000"
}

export const font = {
    p1: "Poppins_100Thin",
    p2: "Poppins_200ExtraLight",
    p3: "Poppins_300Light",
    p4: "Poppins_400Regular",
    p5: "Poppins_500Medium",
    p6: "Poppins_600SemiBold",
    p7: "Poppins_700Bold",
    p8: "Poppins_800ExtraBold",
    p9: "Poppins_900Black"
}