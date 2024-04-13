import SelectStudentCard from '../../../../components/select-student-card';
import {
  SafeAreaView,
  View,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { useAccountMode } from '../../../../context';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';

export default function Schedule() {
  const router = useRouter();
  const studentsList = useAccountMode((state) => state.studentsList);
  const selectedStudent = useAccountMode((state) => state.selectedStudent);
  const student = useAccountMode((state) => state.student);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (student)
      router.replace(
        `/home/fragments/schedule-per-student/${student.Matricula}`
      );

    if (selectedStudent)
      router.replace(
        `/home/fragments/schedule-per-student/${selectedStudent.Matricula}`
      );
    setLoading(false);
  }, []);

  if (loading)
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
      }}
    >
      <ScrollView style={{ width: '100%' }}>
        <View style={{ width: '100%', gap: 15, paddingBottom: 15 }}>
          {studentsList?.map((e, i) => (
            <SelectStudentCard
              onPress={() =>
                router.replace(
                  `/home/fragments/schedule-per-student/${e.Matricula}`
                )
              }
              key={i}
              name={e.Nome}
              studentClass={e.Curso}
              registration={e.Matricula}
              grade={e.Turma}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
