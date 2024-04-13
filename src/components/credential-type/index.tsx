import { TouchableOpacity, View, Text } from 'react-native';

export default function CredentialType({
  type,
  onPressStudent,
  onPressResponsible,
}: {
  type: 'responsible' | 'student';
  onPressStudent: () => void;
  onPressResponsible: () => void;
}) {
  // const switchColor = useCustomization((state) => state.switchColor);

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity
        onPress={onPressResponsible}
        style={{
          flexDirection: 'row',
          gap: 10,
          alignItems: 'center',
          justifyContent: 'center',
          height: 50,
          paddingHorizontal: 10,
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
          backgroundColor: 'white',
          opacity: type === 'responsible' ? 1 : 0.3,
        }}
      >
        {/* <Ionicons name={'person'} size={30} color="white" /> */}
        <Text style={{ color: 'white' }}>Responsável</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onPressStudent}
        style={{
          flexDirection: 'row',
          gap: 10,
          alignItems: 'center',
          justifyContent: 'center',
          height: 50,
          paddingHorizontal: 10,
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
          backgroundColor:  'white',
          opacity: type === 'student' ? 1 : 0.3,
        }}
      >
        {/* <Ionicons name={'school'} size={30} color="white" /> */}
        <Text style={{ color: 'white' }}>Aluno</Text>
      </TouchableOpacity>
    </View>
  );
}
