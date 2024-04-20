import { StyleSheet, Dimensions } from "react-native";
import getFontSize from "../../utils/getFontSize";

const {width, height} = Dimensions.get('screen')

const styles = StyleSheet.create({
    globalContainer: {
        flex: 1,
        backgroundColor: '#F5F7F9',
        // paddingBottom: 10
    },
    footer: {
        flex: 1,
        marginBottom: 10,
        backgroundColor: 'red',
        maxHeight: 20,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        height: '100%',
        bottom: 0,
        width: width,
    },
    responsavelContainer: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
    },
    image: {
        flex: 1,
        width: '50%',
        height: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    textInputCredentialsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 48,
        textAlign: 'center'
    },
    textInputSenhaContainer: {
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
    iconPass: {
        position: 'absolute',
        color: '#727A8F',
        opacity: 0.7,
        left: width * 0.06
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
        gap: 0,
        justifyContent: 'space-evenly',
    },
    responsavelCredencialInput: {
        backgroundColor: 'rgba(114, 122, 143, 0.12)',
        borderRadius: 10,
        width: '100%',
        textAlign: 'center'
    },
    responsavelSenhaInput: {
        backgroundColor: 'rgba(114, 122, 143, 0.12)',
        borderRadius: 10,
        width: '100%',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
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
    },
    shadowProp: {
        shadowColor: '#282828',
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