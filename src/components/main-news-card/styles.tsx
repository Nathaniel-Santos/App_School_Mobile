import { StyleSheet } from "react-native";
import getFontSize from "../../utils/getFontSize";

const styles = StyleSheet.create({
    heading: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 13,
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        paddingVertical: 45,
        paddingHorizontal: 25,
        width: '100%',
        marginVertical: 10,
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    elevation: {
        elevation: 20,
        shadowColor: '#52006A',
    },
    touchableOpaticyContainer: {
        width: '100%',
        borderRadius: 30,
        overflow: 'hidden',
        flexDirection: 'column',
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        backgroundColor: '#fff',
        elevation: 5, // Android
    },
    cardViewContainer: {
        width: '100%',
        height: 190
    },
    imageView: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    linearGradient: {
        width: '100%',
        height: '100%',
        position: 'absolute'
    },
    infoContainer: {
        position: 'relative',
        width: '100%',
        height: '100%',
        padding: 10,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        flexDirection: 'column',
    },
    tagActivated: {
        backgroundColor: '#BC509A',
        borderRadius: 50,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    tagInactivated: {
        color: 'white',
        fontSize: getFontSize(10)
    },
    titleText: {
        color: 'white',
        fontSize: getFontSize(24),
        fontWeight: 'bold',
    },
    footContainer: {
        padding: 10,
        backgroundColor: 'white',
        flexDirection: 'column',
        gap: 10,
    },
    footDescriptionText: {
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
    }
})

export default styles