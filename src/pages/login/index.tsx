import { SafeAreaView, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import BackButton from '../../components/back-button';
import CredentialType from '../../components/credential-type';
import { useState } from 'react';
import styles from './styles';


export default function Login({ navigation }: any) {
    const [credential, setCredential] = useState<string>('01432183524');
    const [password, setPassword] = useState<string>('12345');
    const [type, setType] = useState<'student' | 'responsible'>('responsible');

    const imageUri = 'https://media.discordapp.net/attachments/971787111470596136/1160832338758992002/Insight_Consultoria_-_colorlogo_1_2.png?ex=65643cdc&is=6551c7dc&hm=0f0bf460f2cd85561a5f010472e3ca77b57ae6e693627175c9730fa7511b5739&='

    return (
        <SafeAreaView style={styles.globalContainer}>
            <View style={styles.estudanteContainer} >
                <BackButton />
                <CredentialType
                    type={type}
                    onPressStudent={() => setType('student')}
                    onPressResponsible={() => setType('responsible')}
                />
            </View>
            <View style={styles.responsavelContainer} >
                <Image
                    style={styles.image}
                    source={{
                        uri: imageUri,
                    }}
                    resizeMode="contain"
                />
                <View style={styles.responsavelCredencialContainer} >
                    <TextInput
                        keyboardType="numeric"
                        style={styles.responsavelCredencialInput}
                        onChangeText={setCredential}
                        value={credential}
                        placeholder={type === 'responsible' ? 'CPF do responsável' : 'Digite sua matrícula'} />

                    <TextInput style={styles.responsavelSenhaInput}
                        onChangeText={setPassword}
                        value={password}
                        secureTextEntry={true}
                        placeholder="**************" />

                    <TouchableOpacity disabled={!(credential && password)} onPress={() => navigation.navigate('Home')} style={styles.buttonEntrar} >
                        <Text style={styles.buttonEntrarText}>
                            Entrar
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {}} style={styles.buttonEsqueciSenha} >
                        <Text style={styles.buttonEsqueciSenhaText}>
                            Esqueci minha senha
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}
