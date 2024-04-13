import { StyleSheet } from 'react-native';
import getFontSize from '../../utils/getFontSize';

const styles = StyleSheet.create({
    globalContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    containerInstituicaoText: {
        color: '#727A8F',
        fontSize: getFontSize(24),
        fontWeight: '600',
        textAlign: 'center',
    },
    instituicaoText: { 
        color: '#548ED2' 
    },
    lottieViewComponent: {
        flex: 1,
        width: '90%',
    },
    subText: {
        color: '#727A8F',
        fontSize: getFontSize(14),
        textAlign: 'center',
    },
    containerButtons: {
        flexDirection: 'column',
        gap: 25,
        width: '100%',
        alignItems: 'center',
    },
    buttonComecar: {
        backgroundColor: '#00B83F',
        paddingVertical: 15,
        borderRadius: 78,
        width: '80%',
        alignItems: 'center',
    },
    buttonComecarText: { 
        color: '#FFFFFF', 
        fontSize: getFontSize(16) 
    },
    buttonSuporte: {
        backgroundColor: '#rgba(114, 122, 143, 0.6)',
        paddingVertical: 15,
        borderRadius: 78,
        width: '80%',
        alignItems: 'center',
    },
    buttonSuportetext: { 
        color: '#FFFFFF', 
        fontSize: getFontSize(16) 
    }
})

export default styles