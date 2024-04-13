import { View, Text, TouchableOpacity, ScrollView, Modal } from 'react-native';
import { useAccountMode, useShowSelectStudentModal } from '../../context';
import { useRoute as router } from '@react-navigation/native';

export default function ChangeStudentModal({navigation}: any) {

  const setSelectStudentModal = useShowSelectStudentModal(
    (state) => state.setSelectStudentModal
  );
  const selectStudentModal = useShowSelectStudentModal((state) => state.opened);
  const studentsList = useAccountMode((state) => state.studentsList);
  const setSelectedStudent = useAccountMode(
    (state) => state.setSelectedStudent
  );

  return (
    <Modal transparent={true} visible={selectStudentModal} animationType="fade">
      <View
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          padding: 50,
          flex: 1,
          paddingTop: 100,
          paddingBottom: 300,
        }}
      >
        <View
          style={{
            backgroundColor: '#E3E3E3',
            padding: 15,
            gap: 10,
            flex: 1,
            borderRadius: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setSelectedStudent(null);
              setSelectStudentModal(false);
              navigation.navigate('Home');
            }}
            style={{
              backgroundColor: 'white',
              width: '100%',
              paddingVertical: 10,
              alignItems: 'center',
              borderRadius: 10,
            }}
          >
            <Text style={{ color: '#727A8F', fontSize: 15 }}>
              Selecionar todos
            </Text>
          </TouchableOpacity>

          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ flex: 1, width: '100%' }}
          >
            <View style={{ gap: 10 }}>
              {studentsList?.map((e, i) => (
                <TouchableOpacity
                  key={i}
                  onPress={() => {
                    setSelectedStudent(e);
                    setSelectStudentModal(false);
                    navigation.navigate('Home');
                  }}
                  style={{
                    backgroundColor: 'white',
                    width: '100%',
                    paddingVertical: 20,
                    alignItems: 'flex-start',
                    borderRadius: 10,
                    paddingHorizontal: 20,
                  }}
                >
                  <Text style={{ color: '#727A8F', fontSize: 13 }}>
                    {e.Nome}
                  </Text>
                  <Text
                    style={{ color: 'rgba(114, 122, 143, 0.8)', fontSize: 12 }}
                  >
                    {e.Matricula}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}
