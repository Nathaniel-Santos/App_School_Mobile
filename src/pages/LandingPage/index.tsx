import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import styles from './styles';

export default function LandingPage({navigation}: any) {

    return (
        <SafeAreaView style={styles.globalContainer} >
            <LottieView autoPlay 
                style={styles.lottieViewComponent}
                source={require('../../assets/animations/animation_ln28ko6n.json')} />

            <Text style={styles.containerInstituicaoText}> 
                Escolha sua{' '}
                <Text style={styles.instituicaoText}>instituição de ensino</Text>
            </Text>

            <Text style={styles.subText} >
                Tenha todos os recursos educacionais ao seu alcance.
            </Text>

            <View style={styles.containerButtons}>
                <TouchableOpacity style={styles.buttonComecar} onPress={() => navigation.navigate('Escola')} >
                    <Text style={styles.buttonComecarText}>
                        Começar
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonSuporte} >
                    <Text style={styles.buttonSuportetext}>
                        Suporte
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}