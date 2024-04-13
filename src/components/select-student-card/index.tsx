import { View, Text, TouchableOpacity } from 'react-native';
import { router, useRouter } from 'expo-router';

export default function SelectStudentCard({
  name,
  registration,
  grade,
  studentClass,
  onPress,
}: {
  name: string;
  registration: string;
  grade: string;
  studentClass: string;
  onPress: () => void;
}) {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={onPress}
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
            {name}
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: 'rgba(114, 122, 143, 0.8)',
            }}
          >
            {registration}
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
          {studentClass}
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: '#727A8F',
          }}
        >
          TURMA {grade}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
