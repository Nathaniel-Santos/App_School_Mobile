import { useMemo, useState } from 'react';
import { SafeAreaView, Text, View, TextInput, TouchableOpacity, ScrollView, Switch } from 'react-native';
import LottieView from 'lottie-react-native';
import Feather from 'react-native-vector-icons/Feather'
import FooterCreatedBy from '../../components/FooterCreatedBy';
import styles from './styles';


export default function Escola({ navigation }: any) {
    const [input, setInput] = useState<string>('');
    

    const memoizedLottieComponent = useMemo(() => {
        return (
            <LottieView autoPlay
                loop={false}
                style={styles.lottieViewComponent}
                source={require('../../assets/animations/animation_school.json')} />
        );
    }, []);

    return (
        <SafeAreaView style={styles.globalContainer} >
            {memoizedLottieComponent}

            <View style={[styles.containerView, styles.elevation, styles.shadowProp]} >
                <View style={styles.textInputEscolaContainer}>
                    <Feather size={25} style={styles.iconSearch} name="search" />
                    <TextInput
                        value={input}
                        onChangeText={(e) => setInput(e)}
                        style={styles.textInputEscola}
                        placeholder={"Digite o nome da instituição"}
                        placeholderTextColor={'#727A8F'}
                    />
                </View>

                <View style={styles.containerListaEscolas} >
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.viewItemEscola}>
                            <TouchableOpacity>
                                <Text style={styles.textEscola}>Escola</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>

                <TouchableOpacity style={styles.buttonSelecionar} onPress={() => navigation.navigate('Login')} >
                    <Text style={styles.buttonSelecionarText}>
                        Selecionar
                    </Text>
                </TouchableOpacity>
                <FooterCreatedBy />
            </View>
        </SafeAreaView>
    );
}


