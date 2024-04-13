import { View, ScrollView, ActivityIndicator } from 'react-native';
import FinancePerStudentContainer from '../../../../components/finance-per-student-container';
import useFetcher from '../../../../utils/useFetcher';
import { useEffect, useState } from 'react';
import * as SecureStore from 'expo-secure-store';
import { useAccountMode } from '../../../../context';
import { useRouter } from 'expo-router';

export default function Finance() {
  const [selectedDb, setSelectedDb] = useState<string>('');
  const [token, setToken] = useState<string>('');
  const selectedStudent = useAccountMode((state) => state.selectedStudent);
  const router = useRouter();

  useEffect(() => {
    if (selectedStudent)
      router.replace(
        `/home/fragments/finance-per-student/${selectedStudent.Matricula}`
      );

    (async function () {
      const dbName = await SecureStore.getItemAsync('db_name');
      const jwt = await SecureStore.getItemAsync('token');
      setSelectedDb(dbName as string);
      setToken(jwt as string);
    })();
  }, []);

  const { data, status, loading, error, fetchData, loadingHandler } =
    useFetcher({
      resource: '/responsibles/payments',
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
        <ScrollView>
          {data.map((e: any[], i: number) => (
            <FinancePerStudentContainer key={i} minimizedPayments={e} />
          ))}
        </ScrollView>
      </View>
    );
}
