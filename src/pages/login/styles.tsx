import { StyleSheet } from "react-native";
import getFontSize from "../../utils/getFontSize";

const styles = StyleSheet.create({
    globalContainer: {
        flex: 1,
        backgroundColor: '#F5F7F9'
    },
    estudanteContainer: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    responsavelContainer: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        gap: 15
    },
    image: {
        flex: 1,
        width: '100%',
        height: '40%'
    },
    responsavelCredencialContainer: {
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
    responsavelCredencialInput: {
        backgroundColor: 'rgba(114, 122, 143, 0.12)',
        borderRadius: 10,
        padding: 20,
        width: '100%',
    },
    responsavelSenhaInput: {
        backgroundColor: 'rgba(114, 122, 143, 0.12)',
        borderRadius: 10,
        padding: 20,
        width: '100%',
    },
    buttonEntrar: {
        backgroundColor: '#00B83F',
        paddingVertical: 15,
        borderRadius: 78,
        width: '100%',
        alignItems: 'center',
        opacity: 1,
    },
    buttonEntrarText: {
        color: '#FFFFFF',
        fontSize: getFontSize(16)
    },
    buttonEsqueciSenha: {
        backgroundColor: 'rgba(114, 122, 143, 0.8)',
        paddingVertical: 15,
        borderRadius: 78,
        width: '100%',
        alignItems: 'center',
    },
    buttonEsqueciSenhaText: { 
        color: '#FFFFFF', 
        fontSize: getFontSize(16) 
    }
})

export default styles