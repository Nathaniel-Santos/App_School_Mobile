import SelectStudentCard from '../../../../components/select-student-card';
import { SafeAreaView, View, ScrollView } from 'react-native';
import { useAccountMode } from '../../../../context';
import { useRouter } from 'expo-router';

export default function SchoolReport() {
  const router = useRouter();
  const studentsList = useAccountMode((state) => state.studentsList);

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
                  `/home/fragments/school-report-per-student/${e.Matricula}`
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
