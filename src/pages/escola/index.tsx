import { useMemo, useState } from 'react';
import { SafeAreaView, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import LottieView from 'lottie-react-native';
import styles from './styles';


export default function Escola({navigation}: any) {
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

            <View style={styles.containerView} >
                <TextInput
                    value={input}
                    onChangeText={(e) => setInput(e)}
                    style={styles.textInputEscola}
                    placeholder="Digite o nome da instituição"
                />

                <View style={styles.containerListaEscolas} >
                    <ScrollView>
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
            </View>
        </SafeAreaView>
    );
}


