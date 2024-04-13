import FinanceCardButton from '../../../../components/finance-card-button';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as SecureStore from 'expo-secure-store';
import useFetcher from '../../../../utils/useFetcher';

export default function AllFinance() {
  const { registration } = useLocalSearchParams();

  const [selectedDb, setSelectedDb] = useState<string>('');
  const [token, setToken] = useState<string>('');

  useEffect(() => {
    (async function () {
      const dbName = await SecureStore.getItemAsync('db_name');
      const jwt = await SecureStore.getItemAsync('token');
      setSelectedDb(dbName as string);
      setToken(jwt as string);
    })();
  }, []);

  const { data, status, loading, error, fetchData, loadingHandler } =
    useFetcher({
      resource: `/responsibles/payments/${registration}`,
      method: 'get',
      configs: {
        headers: {
          selecteddb: selectedDb,
          authentication: token,
        },
      },
    });

  useEffect(() => {
    if (selectedDb && token) {
      fetchData();
    }
  }, [selectedDb, token]);

  if (loading)
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size={'large'} />
      </View>
    );

  if (!loading)
    return (
      <View
        style={{
          flex: 1,
          width: '100%',
          paddingHorizontal: 10,
        }}
      >
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 10,
          }}
        >
          <Text
            style={{
              color: '#535353',
              fontSize: 15,
              fontWeight: 'bold',
            }}
          >
            { data[0].Nome }
          </Text>

          <View
            style={{
              flexDirection: 'row',
              gap: 5,
              alignItems: 'center',
            }}
          >
            <View
              style={{
                borderRadius: 50,
                paddingVertical: 5,
                paddingHorizontal: 15,
                backgroundColor: '#dce1f7',
              }}
            >
              <Text
                style={{
                  color: '#6D85FF',
                  fontWeight: '600',
                  fontSize: 13,
                }}
              >
                Todos
              </Text>
            </View>
            <TouchableOpacity
              style={{
                width: 25,
                height: 25,
                backgroundColor: '#6D85FF',
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Ionicons name={'filter'} size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView>
          <View
            style={{
              paddingBottom: 10,
            }}
          >
            {data.map((e: any, i: number) => (
              <FinanceCardButton
                key={i}
                name={e.Nome}
                status={e.Quitado}
                value={e.Valor}
                date={e.Vencimento}
                barCode={e.CodBarras}
                type={e.tipo}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    );
}
