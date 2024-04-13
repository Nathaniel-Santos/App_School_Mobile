import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import RequestCard from '../../../../components/request-card';

import { useRouter } from 'expo-router';
import { useEffect } from 'react';

export default function RequestPage() {
  const router = useRouter();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 10,
      }}
    >
      <TouchableOpacity
        onPress={() => router.replace('/home/fragments/request-form/')}
        style={{
          paddingVertical: 10,
          paddingHorizontal: 40,
          backgroundColor: '#5974FF',
          borderRadius: 50,
          flexDirection: 'row',
          gap: 5,
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: '600',
            color: 'white',
          }}
        >
          Solicitar
        </Text>
        <Ionicons name={'add-circle'} size={25} color="white" />
      </TouchableOpacity>

      <View style={{ width: '100%', paddingVertical: 10 }}>
        <Text
          style={{
            color: '#727A8F',
            fontWeight: '600',
            fontSize: 14,
          }}
        >
          Histórico
        </Text>
      </View>

      <ScrollView style={{ width: '100%' }}>
        <View style={{ gap: 10, marginBottom: 10 }}>
          <RequestCard status={4} />
          {/* <RequestCard />
          <RequestCard />
          <RequestCard />
          <RequestCard />
          <RequestCard />
          <RequestCard />
          <RequestCard />
          <RequestCard /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
