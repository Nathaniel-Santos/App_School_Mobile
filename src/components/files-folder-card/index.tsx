import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';

export default function FilesFolderCard() {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => router.replace('/home/fragments/files-per-id/')}
      style={{
        gap: 5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
      }}
    >
      <View
        style={{
          paddingHorizontal: 50,
          paddingVertical: 25,
          backgroundColor: 'white',
          borderRadius: 15,
        }}
      >
        <Ionicons name={'folder'} size={60} color="#6D85FF" />

        <View
          style={{
            position: 'absolute',
            top: 5,
            right: 10,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Text
            style={{
              color: '#F29A16',
              fontSize: 14,
            }}
          >
            1
          </Text>
          <Ionicons name={'notifications'} size={15} color="#F29A16" />
        </View>

        <View
          style={{
            position: 'absolute',
            bottom: 5,
            right: 10,
            flexDirection: 'row',
          }}
        >
          <Text
            style={{
              color: '#727A8F',
              fontSize: 10,
            }}
          >
            Qtd. 15
          </Text>
        </View>
      </View>
      <Text>Financeiro</Text>
    </TouchableOpacity>
  );
}
