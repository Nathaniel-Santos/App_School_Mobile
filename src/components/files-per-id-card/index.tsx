import { TouchableOpacity, View, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function FilesPerIdCard() {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 10,
        width: '100%',
        borderRadius: 10,
        gap: 10,
      }}
    >
      <View>
        <View
          style={{
            backgroundColor: '#FFAD61',
            width: 10,
            height: 10,
            borderRadius: 50,
          }}
        ></View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          flex: 1,
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
          <View
            style={{
              backgroundColor: 'rgba(109, 133, 255, 0.2)',
              borderRadius: 10,
              padding: 10,
              flexGrow: 0,
            }}
          >
            <Ionicons name={'document-text'} size={30} color="#6D85FF" />
          </View>

          <View style={{ gap: 5, alignItems: 'flex-start' }}>
            <Text style={{ color: '#727A8F', fontSize: 14 }}>
              Declaração IPRF 2023.pdf
            </Text>
            <Text style={{ color: 'rgba(114, 122, 143, 0.5)', fontSize: 12 }}>
              João da Silva. 13MB
            </Text>
          </View>
        </View>

        <Ionicons name={'ellipsis-vertical-sharp'} size={30} color="#6D85FF" />
      </View>
    </TouchableOpacity>
  );
}
