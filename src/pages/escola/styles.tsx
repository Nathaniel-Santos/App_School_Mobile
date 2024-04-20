import { StyleSheet, Dimensions } from "react-native";
import getFontSize from "../../utils/getFontSize";

const {width, height} = Dimensions.get('screen')

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
        paddingTop: 45,
        gap: 10,
        justifyContent: 'space-evenly',
    },
    textInputEscolaContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 48,
        textAlign: 'center'
    },
    iconSearch: {
        position: 'absolute',
        color: '#727A8F',
        opacity: 0.7,
        left: width * 0.06
    },
    textInputEscola: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: 'rgba(114, 122, 143, 0.12)',
        borderRadius: 10,
        height: 48,
        width: '100%',
    },
    containerListaEscolas: {
        flex: 1,
        backgroundColor: 'rgba(114, 122, 143, 0.12)',
        borderRadius: 10,
        width: '100%',
        padding: 10
    },
    viewItemEscola: {
        padding: 10,
        flexDirection: 'column',
        gap: 10
    },
    textEscola: {
        color: '#727A8F',
        fontSize: 16
    },
    buttonSelecionar: {
        backgroundColor: '#00B83F',
        paddingVertical: 15,
        borderRadius: 78,
        width: '100%',
        alignItems: 'center',
        opacity: 1,
        marginVertical: 15
    },
    buttonSelecionarText: {
        color: '#FFFFFF',
        fontSize: getFontSize(16)
    },
    lottieViewComponent: { 
        flex: 1,
        width: '150%',
    },
    shadowProp: {
        shadowColor: '#282828',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    elevation: {
        elevation: 20,
        shadowColor: '#52006A',
    }
})

export default styles