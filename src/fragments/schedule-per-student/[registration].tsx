import { useEffect, useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import ScheduleCard from '../../../../components/schedule-card';
import {
  formatDateToCustomFormat,
  months,
  getDaysOfMonthAndWeekdays,
  getCurrentDateFormatted,
} from '../../../../utils/scheduleHandler';
import { useLocalSearchParams } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import useFetcher from '../../../../utils/useFetcher';
import { useAccountMode } from '../../../../context';

export default function SchedulePerStudent() {
  const { registration } = useLocalSearchParams();
  const studentsList = useAccountMode((state) => state.studentsList);
  const student = useAccountMode((state) => state.student);
  const [month, setMonth] = useState<number>(new Date().getMonth() + 1);
  const [selectedDate, setSelectedDate] = useState<string>(
    getCurrentDateFormatted()
  );
  const [selectedDb, setSelectedDb] = useState<string>('');
  const [token, setToken] = useState<string>('');

  const { data, status, loading, error, fetchData, loadingHandler } =
    useFetcher({
      resource: `/responsibles/schedule?registration=${registration}&date=${selectedDate}`,
      method: 'get',
      configs: {
        headers: {
          selecteddb: selectedDb,
          authentication: token,
        },
      },
    });

  const {
    data: studentData,
    status: studentStatus,
    loading: studentLoading,
    error: studentError,
    fetchData: studentFetchData,
    loadingHandler: studentLoadingHandler,
  } = useFetcher({
    resource: `/students/schedule?registration=${registration}&date=${selectedDate}`,
    method: 'get',
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
  }, []);

  useEffect(() => {
    if (selectedDb && token && selectedDate) {
      (function () {
        if (student) {
          loadingHandler(false);
          return studentFetchData();
        }
        return fetchData();
      })();
    }
  }, [selectedDb, token, selectedDate]);

  if (loading && studentLoading)
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size={'large'} />
      </View>
    );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 10,
        gap: 15,
      }}
    >
      <View
        style={{
          padding: 15,
          width: '100%',
          borderRadius: 15,
          gap: 15,
          backgroundColor: 'white',
        }}
      >
        <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 50,
              backgroundColor: 'rgba(114, 122, 143, 0.2)',
            }}
          ></View>
          <View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: '#727A8F',
              }}
            >
              {student
                ? student.Nome
                : studentsList?.filter((e) => e.Matricula === registration)[0]
                    .Nome}
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: 'rgba(114, 122, 143, 0.8)',
              }}
            >
              {student
                ? student.Matricula
                : studentsList?.filter((e) => e.Matricula === registration)[0]
                    .Matricula}
            </Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text
            style={{
              fontSize: 14,
              color: '#727A8F',
            }}
          >
            {student
              ? student.Curso
              : studentsList?.filter((e) => e.Matricula === registration)[0]
                  .Curso}
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: '#727A8F',
            }}
          >
            TURMA{' '}
            {student
              ? student.Turma
              : studentsList?.filter((e) => e.Matricula === registration)[0]
                  .Turma}{' '}
          </Text>
        </View>
      </View>

      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}
      >
        <Text style={{ fontSize: 21, color: '#595959', fontWeight: '500' }}>
          {formatDateToCustomFormat(selectedDate)}
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
          <TouchableOpacity
            onPress={() => setMonth(month - 1)}
            disabled={month <= 1}
            style={{
              backgroundColor: '#5974FF',
              borderRadius: 5,
              width: 30,
              height: 30,
              alignItems: 'center',
              justifyContent: 'center',
              opacity: month <= 1 ? 0.5 : 1,
            }}
          >
            <Ionicons name={'chevron-back-outline'} size={25} color="white" />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 25,
              color: '#595959',
              minWidth: 120,
              textAlign: 'center',
              fontWeight: '500',
            }}
          >
            {months[month]}
          </Text>
          <TouchableOpacity
            onPress={() => setMonth(month + 1)}
            disabled={month >= 12}
            style={{
              backgroundColor: '#5974FF',
              borderRadius: 5,
              width: 30,
              height: 30,
              alignItems: 'center',
              justifyContent: 'center',
              opacity: month >= 12 ? 0.5 : 1,
            }}
          >
            <Ionicons
              name={'chevron-forward-outline'}
              size={25}
              color="white"
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ width: '100%', flexGrow: 0 }}
      >
        <View style={{ flexDirection: 'row', gap: 10 }}>
          {getDaysOfMonthAndWeekdays(month).map((e, i) => (
            <TouchableOpacity
              onPress={() => setSelectedDate(e.date)}
              key={i}
              style={{
                width: 70,
                height: 80,
                backgroundColor: selectedDate === e.date ? '#5974FF' : 'white',
                borderRadius: 10,
                gap: 15,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: '500',
                  color: selectedDate === e.date ? '#FFFFFF' : '#595959',
                }}
              >
                {e.day}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '500',
                  color: selectedDate === e.date ? '#FFFFFF' : '#838383',
                }}
              >
                {e.weekday}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ width: '100%', flex: 1 }}
      >
        <View style={{ gap: 15, paddingBottom: 15 }}>
          {student
            ? studentData.map((e: any, i: number) => (
                <ScheduleCard
                  key={i}
                  title={e.Disciplina}
                  content={e.descricao}
                  classActivity={e.atividade_aula}
                  houseActivity={e.atividade_casa}
                />
              ))
            : data.map((e: any, i: number) => (
                <ScheduleCard
                  key={i}
                  title={e.Disciplina}
                  content={e.descricao}
                  classActivity={e.atividade_aula}
                  houseActivity={e.atividade_casa}
                />
              ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
