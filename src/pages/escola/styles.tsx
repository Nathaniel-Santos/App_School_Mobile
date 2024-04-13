import { StyleSheet } from "react-native";
import getFontSize from "../../utils/getFontSize";

const styles = StyleSheet.create({
    globalContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#F5F7F9',
    },
    containerView: {
        flex: 1,
        backgroundColor: 'white',
        width: '100%',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        flexDirection: 'column',
        alignItems: 'center',
        padding: 30,
        gap: 10,
        justifyContent: 'space-evenly',
    },
    textInputEscola: {
        backgroundColor: 'rgba(114, 122, 143, 0.12)',
        borderRadius: 10,
        padding: 20,
        width: '100%',
    },
    containerListaEscolas: {
        backgroundColor: 'rgba(114, 122, 143, 0.12)',
        borderRadius: 10,
        flex: 1,
        width: '100%',
    },
    viewItemEscola: {
        padding: 10,
        flexDirection: 'column',
        gap: 10
    },
    textEscola: {
        color: '#727A8F'
    },
    buttonSelecionar: {
        backgroundColor: '#00B83F',
        paddingVertical: 15,
        borderRadius: 78,
        width: '100%',
        alignItems: 'center',
        opacity: 1,
    },
    buttonSelecionarText: {
        color: '#FFFFFF',
        fontSize: getFontSize(16)
    },
    lottieViewComponent: { 
        flex: 1,
        width: '150%' 
    }
})

export default styles