import { StyleSheet, Dimensions } from 'react-native';
import getFontSize from '../../utils/getFontSize';

const { width, height } = Dimensions.get('screen')

const styles = StyleSheet.create({
    globalContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
        height: '45%', 
        backgroundColor: 'white',
        marginBottom: 0
    },
    containerInstituicaoText: {
        color: '#727A8F',
        fontSize: getFontSize(24),
        fontWeight: '600',
        textAlign: 'center',
        justifyContent: 'center',
    },
    instituicaoText: {
        color: '#548ED2',
    },
    lottieViewComponent: {
        flex: 1,
        width: '90%',
        zIndex: 1
    },
    textsContainer: {
        flex: 1,
        height: '50%',
        width: width - 45,
        justifyContent: 'center',
        // backgroundColor: 'yellow'
    },
    subText: {
        color: '#727A8F',
        fontSize: getFontSize(18),
        textAlign: 'center',
        marginTop: 15
    },
    containerButtons: {
        flex: 2,
        flexDirection: 'column',
        gap: 25,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'red'
    },
    buttonComecar: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#00B83F',
        paddingVertical: 15,
        borderRadius: 78,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonComecarText: {
        display: 'flex',
        color: '#FFFFFF',
        fontSize: getFontSize(16),
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 5
    },
    buttonSuporte: {
        flexDirection: 'row',
        backgroundColor: '#rgba(114, 122, 143, 0.6)',
        paddingVertical: 15,
        borderRadius: 78,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    buttonSuportetext: {
        color: '#FFFFFF',
        fontSize: getFontSize(16),
        marginRight: 8
    }
})

export default styles