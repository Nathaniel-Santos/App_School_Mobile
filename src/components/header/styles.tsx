import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get('screen')

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6986bff8',
        color: '#ffffff',
        marginRight: width * 0.1 - 20,
        borderRadius: 15,
        width: 50,
        height: 50,
        marginTop: 10,
    },
    buttonText: {
        color: '#ffffff',
        marginVertical: 5
    },
    shadowProp: {
        shadowColor: '#8d8d8d',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    elevation: {
        elevation: 20,
        shadowColor: '#52006A',
    }
})

export default styles