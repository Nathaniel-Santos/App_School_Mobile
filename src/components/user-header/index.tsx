import { View, Image, TouchableOpacity, Text } from 'react-native';
import {
  useAccountMode,
  useCustomization,
  useShowSelectStudentModal,
} from '../../context';
import EvilIcons from 'react-native-vector-icons/EvilIcons'

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
      key={'user_header'} >

      <Image style={{ width: 50, height: 50 }} source={require('../../assets/Insight_logo.png')} resizeMode="contain" />

      <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
        <View style={{ alignItems: 'flex-end' }}>
          <Text>{selectedStudent?.Nome || student?.Nome || 'Todos'}</Text>
          {!student && (
            <TouchableOpacity onPress={() => setSelectStudentModal(true)}>
              <Text style={{
                color: changeStudentTextColor || 'black',
                fontWeight: '600',
              }} >
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
            // overflow: 'hidden',
            justifyContent: 'center',
            alignItems: 'center'
          }} >
          <EvilIcons name='user' size={48} style={{
            width: '100%',
            height: '100%',
          }} />
        </View>
      </View>
    </View>
  );
}
