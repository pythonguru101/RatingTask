import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../config/helper";
import { COLORS } from "../assets/colors";

export const styles = StyleSheet.create({
    ratingContainer: {
        paddingHorizontal: horizontalScale(16)
    },
    ratingTitleText: {
        fontSize: moderateScale(13),
        color: 'grey',
        fontWeight: 'bold'
    },
    ratingSubTitleText: {
        fontSize: moderateScale(20),
        color: COLORS.black,
        fontWeight: 'bold'
    },
    ratingIconContainer: {
        flexDirection: 'row',
        marginTop: verticalScale(30)
    },
    ratingImage: {
        height: verticalScale(65),
        width: verticalScale(65),
        resizeMode: 'contain',
        marginRight: horizontalScale(2)
    },
    feedbackTitle: {
        marginTop: verticalScale(30),
        color: COLORS.black,
        fontWeight: 'bold'
    },
    feedbackContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    feedbackItemContainer: {
        paddingVertical: verticalScale(15),
        marginTop: verticalScale(10),
        borderWidth: verticalScale(2),
        width: '31%',
        alignItems: 'center',
        borderRadius: verticalScale(6)
    },
    buttonTitle: {
        color: COLORS.white,
        fontSize: moderateScale(17)
    },
    buttonContainer: {
        height: verticalScale(55),
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: verticalScale(100),
        borderRadius: verticalScale(18)
    },
    headerContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: verticalScale(50),
        backgroundColor: COLORS.primary,
        borderBottomLeftRadius: verticalScale(15),
        borderBottomRightRadius: verticalScale(15)
    },
    headerText: {
        color: COLORS.white,
        fontWeight: '700'
    },
    colorPrimary: {
        color: COLORS.primary
    },
    inputContainer: {
        backgroundColor: 'white',
        alignSelf: 'center',
        marginTop: verticalScale(16),
        borderWidth: verticalScale(1),
        borderColor: COLORS.primary,
        padding: verticalScale(5),
        justifyContent: 'center'
    },
    rateViewContainer: {
        width: '90%',
        alignSelf: 'center',
        height: verticalScale(100),
        alignItems: 'center',
        flexDirection: 'row',
        padding: verticalScale(12),
        borderBottomWidth: verticalScale(1),
        borderBlockColor: 'grey'
    },
    w95: {
        width: '95%'
    },
    rateViewTitle: {
        color: COLORS.black,
        fontSize: moderateScale(15)
    },
    rateViewSubTitle: {
        color: 'grey',
        fontSize: moderateScale(12)
    },
    rateViewIconsContainer: {
        flexDirection: 'row',
        marginTop: verticalScale(5)
    },
    rateViewImage: {
        height: verticalScale(20),
        width: verticalScale(20),
        resizeMode: 'contain',
        marginRight: horizontalScale(2)
    },
    fs14: {
        fontSize: moderateScale(14)
    },
    rateViewSideArrow: {
        height: verticalScale(18),
        width: verticalScale(18)
    },
})