import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerScrollSecondaryCard: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        gap: 10
    },
    containerSecondaryNewsCard: {
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'rgba(0,0,0,0.5)',
        shadowOpacity: 1,
        elevation: 10,
        borderRadius: 35
    },
    buttonCategoryTag: {
        borderRadius: 50,
        paddingVertical: 5,
        paddingHorizontal: 15,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        elevation: 2, // Android
    },
    safeAreaContainer: {
        paddingHorizontal: 10,
        flexDirection: 'column',
        gap: 10,
        flex: 1,
        backgroundColor: '#F5F7F9'
    },
    buttonCategoryTagContainer: {
        flexDirection: 'row',
        gap: 10
    },
    buttonCategoryTagText: {
        color: 'white',
        fontSize: 13,
        fontWeight: '400'
    }
})

export default styles