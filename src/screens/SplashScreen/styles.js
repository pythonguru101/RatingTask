import { StyleSheet } from "react-native";
import { COLORS } from "../../assets/colors";
import { verticalScale } from "../../config/helper";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center'
    },
    splashLogo: {
        height: verticalScale(200),
        width: verticalScale(200)
    },
})