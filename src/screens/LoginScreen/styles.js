import { StyleSheet } from "react-native";
import { COLORS } from "../../assets/colors";
import { moderateScale, verticalScale } from "../../config/helper";

export default styles = StyleSheet.create({
    container: {
        flex: 1
    },
    innerContainer: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    headerText: {
        textAlign: 'center',
        fontSize: moderateScale(30),
        marginTop: verticalScale(50),
        color: COLORS.primary,
        textDecorationLine: 'underline'
    },
    loginLogo: {
        height: verticalScale(200),
        width: verticalScale(200),
        alignSelf: 'center',
        marginTop: verticalScale(70)
    },
})