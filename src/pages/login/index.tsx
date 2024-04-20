import { SafeAreaView, View, Text, TextInput, Image, TouchableOpacity, Switch } from 'react-native';
import BackButton from '../../components/back-button';
import CredentialType from '../../components/credential-type';
import FooterCreatedBy from '../../components/FooterCreatedBy';
import Feather from 'react-native-vector-icons/FontAwesome'
import { useEffect, useState } from 'react';
import styles from './styles';


export default function Login({ navigation }: any) {
    const [credential, setCredential] = useState<string>('01432183524');
    const [password, setPassword] = useState<string>('12345');
    const [type, setType] = useState<'student' | 'responsible'>('responsible');
    const [switchText, setSwitchText] = useState('Responsável')
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    useEffect(() => {
        isEnabled === false ? setSwitchText('Responsável') : setSwitchText('Aluno')
    }, [isEnabled])

    return (
        <SafeAreaView style={styles.globalContainer}>
            <View style={styles.responsavelContainer} >
                <Image style={styles.image} source={require('../../assets/Insight_logo.png')} resizeMode="contain" />

                <View style={[styles.responsavelCredencialContainer, styles.elevation, styles.shadowProp]} >
                    <View style={{width: '100%', gap: 10}}>
                        <Text> Logar como: </Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Switch onValueChange={toggleSwitch} value={isEnabled} />
                            <Text style={{fontWeight: 'bold', fontSize: 18}}>{switchText}</Text>
                        </View>

                    </View>
                    <View style={styles.textInputCredentialsContainer}>
                        <Feather size={25} style={styles.iconSearch} name="user" />
                        <TextInput
                            keyboardType="numeric"
                            style={styles.responsavelCredencialInput}
                            onChangeText={setCredential}
                            value={credential}
                            placeholder={type === 'responsible' ? 'CPF do responsável' : 'Digite sua matrícula'} />
                    </View>

                    <View style={styles.textInputSenhaContainer}>
                        <Feather size={25} style={styles.iconPass} name="lock" />
                        <TextInput style={styles.responsavelSenhaInput}
                            onChangeText={setPassword}
                            value={password}
                            secureTextEntry={true}
                            placeholder="**************" />
                    </View>

                    <TouchableOpacity disabled={!(credential && password)} onPress={() => navigation.navigate('Home')} style={styles.buttonEntrar} >
                        <Text style={styles.buttonEntrarText}>
                            Entrar
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { }} style={styles.buttonEsqueciSenha} >
                        <Text style={styles.buttonEsqueciSenhaText}>
                            Esqueci minha senha
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.footer}>
                <FooterCreatedBy />
            </View>
        </SafeAreaView>
    );
}
