import { SafeAreaView, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';
import styles from './styles';
import { Svg, Ellipse } from 'react-native-svg';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import FooterCreatedBy from '../../components/FooterCreatedBy';

const { width, height } = Dimensions.get('screen')

export default function LandingPage({ navigation }: any) {

    return (
        <SafeAreaView style={styles.globalContainer} >

            <View style={{ flex: 1, width: "100%", backgroundColor: '#F5F7F9', margin: 0 }}>
                <LottieView autoPlay
                    style={styles.lottieViewComponent}
                    source={require('../../assets/animations/animation_ln28ko6n.json')} />
            </View>

            <Svg height={height * 0.07} width={width} style={{ marginBottom: -10, backgroundColor: 'white' }} viewBox="0 0 100 100">
                <Ellipse cx={50} cy={0} rx={'55%'} ry={75} stroke="#F5F7F9" strokeWidth="2.5" fill="#F5F7F9" />
            </Svg>

            <View style={styles.infoContainer}>

                <View style={styles.textsContainer}>
                    <Text style={styles.containerInstituicaoText}>
                        Escolha sua{' '}
                        <Text style={styles.instituicaoText}>instituição de </Text>
                        <Text style={styles.instituicaoText}>ensino</Text>
                    </Text>

                    <Text style={styles.subText} >
                        Tenha todos os recursos educacionais ao seu alcance.
                    </Text>
                </View>


                <View style={styles.containerButtons}>
                    <TouchableOpacity style={styles.buttonComecar} onPress={() => navigation.navigate('Escola')} >
                        <Text style={styles.buttonComecarText}>
                            Começar
                        </Text>
                        <Feather name="log-in" size={25} color="#fafafa" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonSuporte} >
                        <Text style={styles.buttonSuportetext}>
                            Suporte
                        </Text>
                        <FontAwesome name="whatsapp" size={25} color="#fafafa" />
                    </TouchableOpacity>
                    <FooterCreatedBy />
                </View>
            </View>

        </SafeAreaView>
    );
}