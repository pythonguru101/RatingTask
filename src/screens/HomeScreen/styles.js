import { StyleSheet } from "react-native";
import { moderateScale, verticalScale } from "../../config/helper";
import { COLORS } from "../../assets/colors";

export const styles = StyleSheet.create({
    container: {
        marginTop: verticalScale(20)
    },
    loaderContainer: {
        marginTop: verticalScale(100)
    },
    logoutContainer: {
        position: 'absolute',
        bottom: 20,
        alignItems: 'center',
        width: '100%',
    },
    logoutText: {
        color: COLORS.primary,
        fontSize: moderateScale(20),
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },
})