import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get('screen')

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: width * 0.1 - 20,
        backgroundColor: '#6986bff8',
        color: '#ffffff',
        borderRadius: 6,
        paddingHorizontal: 10,
        marginTop: 10,
    },
    buttonText: {
        color: '#ffffff',
        marginVertical: 5
    }
})

export default styles