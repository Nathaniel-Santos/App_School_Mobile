import { View, SafeAreaView, Text, FlatList } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import FilesFolderCard from '../../../../components/files-folder-card';

export default function Files() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        width: '100%',
        paddingHorizontal: 10,
      }}
    >
      <View
        style={{
          padding: 15,
          alignItems: 'center',
          backgroundColor: 'white',
          borderRadius: 15,
          gap: 10,
          marginBottom: 10,
        }}
      >
        <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#727A8F' }}>
          Dados Gerais
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            width: '100%',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <Ionicons name={'notifications'} size={25} color="#F29A16" />
          <Text style={{ fontSize: 30, color: '#F29A16', fontWeight: 'bold' }}>
            3
          </Text>
          <Text style={{ fontSize: 14, color: '#F29A16' }}>
            Pendentes para leitura
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '100%',
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
            <Ionicons
              name={'checkmark-circle-sharp'}
              size={19}
              color="#2BBD65"
            />

            <Text
              style={{ color: '#727A8F', fontSize: 13, fontWeight: 'bold' }}
            >
              25
            </Text>

            <Text style={{ color: '#727A8F' }}>Arquivos lidos</Text>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
            <View
              style={{
                borderRadius: 50,
                backgroundColor: '#D9D9D9',
                width: 10,
                height: 10,
              }}
            ></View>

            <Text
              style={{ color: '#727A8F', fontSize: 13, fontWeight: 'bold' }}
            >
              28
            </Text>
            <Text style={{ color: '#727A8F' }}>Arquivos totais</Text>
          </View>
        </View>
      </View>

      <View style={{ alignItems: 'center', gap: 10, flex: 1 }}>
        <FlatList
          numColumns={2}
          data={[
            { id: '1', text: 'Item 1' },
            { id: '2', text: 'Item 2' },
            { id: '3', text: 'Item 3' },
            { id: '4', text: 'Item 4' },
            { id: '5', text: 'Item 5' },
            { id: '6', text: 'Item 6' },
            { id: '7', text: 'Item 7' },
            { id: '8', text: 'Item 8' },
            { id: '9', text: 'Item 9' },
          ]}
          renderItem={({ item: _ }) => <FilesFolderCard />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}
