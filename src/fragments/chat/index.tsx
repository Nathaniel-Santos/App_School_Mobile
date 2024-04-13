import { useEffect, useState } from 'react';
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
  ScrollView,
  TextInput,
  Keyboard,
  ActivityIndicator,
} from 'react-native';
import { app } from '../../../../firebase';
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  onSnapshot,
  orderBy,
} from 'firebase/firestore';
import getFontSize from '../../../../utils/getFontSize';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Picker } from '@react-native-picker/picker';
import useFetcher from '../../../../utils/useFetcher';
import * as SecureStore from 'expo-secure-store';

const SECTOR_MOCK = ['Financeiro', 'Eventos', 'Administração'];

function formatTimestamp(timestamp: number) {
  // Criar um objeto Date a partir do timestamp
  let date = new Date(timestamp);
  // Definir as opções de formatação da data
  let dateOptions = {
    day: 'numeric', // usar o dia numérico
    month: 'short', // usar o nome abreviado do mês
    timeZone: 'America/Sao_Paulo', // usar o fuso horário de São Paulo
  };
  // Definir as opções de formatação da hora
  let timeOptions = {
    hour: 'numeric', // usar a hora numérica
    minute: 'numeric', // usar o minuto numérico
    timeZone: 'America/Sao_Paulo', // usar o fuso horário de São Paulo
  };
  // Formatar a data e a hora usando as opções definidas
  // @ts-ignore
  let formattedDate = date.toLocaleDateString('pt-BR', dateOptions); // obter a data formatada em português do Brasil
  // @ts-ignore
  let formattedTime = date.toLocaleTimeString('pt-BR', timeOptions); // obter a hora formatada em português do Brasil
  // Retornar a data e a hora no formato "7 Dez as 18:30"
  return `${formattedDate} as ${formattedTime}`;
}

export default function ChatBySector() {
  const [chatMessages, setChatMessages] = useState<any[]>([]);
  const [message, setMessage] = useState<string>('');
  const [sector, setSector] = useState('Financeiro');
  const [keyboardHandler, setKeyboardHandler] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedDb, setSelectedDb] = useState<string>('');
  const [token, setToken] = useState<string>('');

  const {
    data: getOneRespData,
    loading: getOneRespLoading,
    error,
    fetchData,
    loadingHandler,
  } = useFetcher({
    resource: '/responsibles',
    method: 'get',
    configs: {
      headers: {
        selecteddb: selectedDb,
        authentication: token,
      },
    },
  });

  const { loading: chatLoading, fetchData: chatFetchData } = useFetcher({
    resource: '/responsibles/sendmessagechat',
    method: 'post',
    body: {
      setor: sector,
      mensagem: message,
    },
    configs: {
      headers: {
        selecteddb: selectedDb,
        authentication: token,
      },
    },
  });

  useEffect(() => {
    (async function () {
      const dbName = await SecureStore.getItemAsync('db_name');
      const jwt = await SecureStore.getItemAsync('token');
      setSelectedDb(dbName as string);
      setToken(jwt as string);
    })();

    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => setKeyboardHandler(true)
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => setKeyboardHandler(false)
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  useEffect(() => {
    setLoading(true);
    if (selectedDb && token && !getOneRespLoading) {
      const db = getFirestore(app);
      const q = query(
        collection(db, selectedDb),
        orderBy('enviadoEm'),
        where('setor', '==', sector),
        where('cpf', '==', getOneRespData[0].cpf)
      );
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const cities: any[] = [];
        querySnapshot.forEach((doc) => {
          cities.push(doc.data());
        });
        setChatMessages(cities);
        setLoading(false);
      });
      return () => unsubscribe();
    }
  }, [sector, getOneRespLoading, selectedDb]);

  useEffect(() => {
    if (selectedDb && token) {
      fetchData();
    }
  }, [selectedDb, token]);

  if (loading)
    return (
      <SafeAreaView
        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      >
        <ActivityIndicator size={'large'} />
      </SafeAreaView>
    );

  return (
    <SafeAreaView
      style={{ alignItems: 'center', gap: 15, paddingTop: 20, flex: 1 }}
    >
      <Picker
        style={{ width: '100%' }}
        selectedValue={sector}
        onValueChange={(itemValue, itemIndex) => setSector(itemValue)}
      >
        {SECTOR_MOCK?.map((e, i) => (
          <Picker.Item key={i} label={e} value={e} />
        ))}
      </Picker>
      <Text style={{ color: '#505768' }}>Atendimento</Text>
      <View
        style={{
          flex: 1,
          width: '100%',
          marginBottom: Keyboard.metrics()?.height,
        }}
      >
        <View style={{ flex: 1, width: '100%' }}>
          <ScrollView>
            <View
              style={{ gap: 20, paddingVertical: 10, paddingHorizontal: 10 }}
            >
              {!chatMessages.length && (
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 16,
                    color: '#505768',
                  }}
                >
                  Ainda não há mensagens neste setor.
                </Text>
              )}

              {chatMessages.map((e, i) => (
                <View
                  key={i}
                  style={{
                    width: '60%',
                    backgroundColor: !e.atendente ? '#A1E79A' : '#DFDFDF',
                    padding: 10,
                    alignSelf: !e.atendente ? 'flex-end' : 'flex-start',
                    borderRadius: 10,
                  }}
                >
                  {e.atendente && (
                    <Text
                      style={{
                        color: '#505768',
                        fontSize: getFontSize(12),
                        marginBottom: 10,
                      }}
                    >
                      {e.atendente}
                    </Text>
                  )}

                  <Text style={{ textAlign: 'left' }}>{e.mensagem}</Text>
                  <Text
                    style={{ alignSelf: 'flex-end', fontSize: getFontSize(10) }}
                  >
                    {formatTimestamp(e.enviadoEm)}
                  </Text>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>

        <View
          style={{
            height: 80,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            flexDirection: 'row',
          }}
        >
          <TextInput
            value={message}
            onChangeText={(e) => setMessage(e)}
            style={{
              backgroundColor: 'rgba(197, 204, 225, 0.40)',
              borderRadius: 10,
              padding: 10,
              width: '70%',
            }}
            placeholder="Digite sua mensagem"
          />

          <TouchableOpacity
            onPress={() => {
              setMessage('');
              chatFetchData();
            }}
            style={{
              padding: 10,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#35BC63',
              borderRadius: 10,
            }}
          >
            <Ionicons name="send-sharp" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
