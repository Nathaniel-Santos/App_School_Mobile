import { View, Image, TouchableOpacity, Text } from 'react-native';
import {
  useAccountMode,
  useCustomization,
  useShowSelectStudentModal,
} from '../../context';

export default function UserHeader() {
  const setSelectStudentModal = useShowSelectStudentModal(
    (state) => state.setSelectStudentModal
  );
  const selectedStudent = useAccountMode((state) => state.selectedStudent);
  const student = useAccountMode((state) => state.student);
  const changeStudentTextColor = useCustomization(
    (state) => state.changeStudentTextColor
  );

  return (
    <View
      style={{
        paddingHorizontal: 10,
        paddingTop: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
      }}
      key={'user_header'}
    >
      <Image
        source={{
          uri: 'https://media.discordapp.net/attachments/971787111470596136/1160832338758992002/Insight_Consultoria_-_colorlogo_1_2.png?ex=65643cdc&is=6551c7dc&hm=0f0bf460f2cd85561a5f010472e3ca77b57ae6e693627175c9730fa7511b5739&=',
        }}
        style={{
          width: 50,
          height: 50,
        }}
        resizeMode="contain"
      />

      <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
        <View style={{ alignItems: 'flex-end' }}>
          <Text>{selectedStudent?.Nome || student?.Nome || 'Todos'}</Text>
          {!student && (
            <TouchableOpacity onPress={() => setSelectStudentModal(true)}>
              <Text
                style={{
                  color: changeStudentTextColor || 'black',
                  fontWeight: '600',
                }}
              >
                Trocar aluno
              </Text>
            </TouchableOpacity>
          )}
        </View>

        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 1000,
            overflow: 'hidden',
          }}
        >
          <Image
            source={{
              uri: 'https://media.discordapp.net/attachments/971787111470596136/1160832338758992002/Insight_Consultoria_-_colorlogo_1_2.png?ex=65643cdc&is=6551c7dc&hm=0f0bf460f2cd85561a5f010472e3ca77b57ae6e693627175c9730fa7511b5739&=',
            }}
            style={{
              width: '100%',
              height: '100%',
            }}
            resizeMode="cover"
          />
        </View>
      </View>
    </View>
  );
}
