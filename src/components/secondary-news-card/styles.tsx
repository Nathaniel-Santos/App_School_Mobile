import { StyleSheet } from "react-native";
import getFontSize from "../../utils/getFontSize";
import { Dimensions } from "react-native";

const {width, height} = Dimensions.get('screen')

const styles = StyleSheet.create({
    image: {
        width: width - 20,
        height: '100%',
        resizeMode: 'cover',
    },
    button: {
        width: '100%',
        borderRadius: 30,
        overflow: 'hidden',
        flexDirection: 'column',
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        backgroundColor: '#fff',
        elevation: 2, // Android
    },
    infoContainer: {
        width: '100%',
        height: 130
    },
    linearGradiente: {
        width: '100%',
        height: '100%',
        position: 'absolute'
    },
    titleAndTagContainer: {
        position: 'relative',
        width: '100%',
        height: '100%',
        padding: 10,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        flexDirection: 'column',
    },
    titleText: {
        color: 'white',
        fontSize: getFontSize(24),
        fontWeight: 'bold',
    },
    tagContainer: {
        backgroundColor: '#BC509A',
        borderRadius: 50,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    tagText: {
        color: 'white',
        fontSize: getFontSize(10)
    },
    descriptionContainer: {
        padding: 10,
        backgroundColor: 'white',
        flexDirection: 'column',
        gap: 10,
    },
    descriptionText: {
        color: '#727A8F',
        fontSize: getFontSize(14)
    },
    dateContainer: {
        width: '100%',
        alignItems: 'flex-end'
    },
    dateText: {
        color: 'rgba(114, 122, 143, 0.7)',
        fontSize: getFontSize(12),
    },

})

export default styles