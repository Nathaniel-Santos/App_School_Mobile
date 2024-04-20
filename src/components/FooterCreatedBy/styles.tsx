import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        columnGap: 10,
        maxHeight: 20,
        backgroundColor: '#ffffff'
    },
    text: {
        color: '#727A8F',
        opacity: 0.7,
        fontSize: 12
    },
    imageInsight: {
        width: 22,
        height: 25
    },
    imageInfodat: {
        width: 24,
        height: 24
    }
})

export default styles