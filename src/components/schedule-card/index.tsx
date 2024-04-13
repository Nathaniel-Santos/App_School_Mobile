import { View, TouchableOpacity, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';

export default function ScheduleCard({
  title,
  content,
  classActivity,
  houseActivity,
}: {
  title: string;
  content: string;
  classActivity: string;
  houseActivity: string;
}) {
  const [maximized, setMaximized] = useState<boolean>(false);

  return (
    <View style={{ width: '100%' }}>
      <TouchableOpacity
        onPress={() => setMaximized(!maximized)}
        style={{
          backgroundColor: 'white',
          width: '100%',
          height: 70,
          borderRadius: 15,
          borderBottomLeftRadius: maximized ? 0 : 15,
          borderBottomRightRadius: maximized ? 0 : 15,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 15,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: '#696969',
            flex: 1,
            textAlign: 'center',
          }}
        >
          {title}
        </Text>

        <Ionicons
          name={maximized ? 'remove-outline' : 'add-outline'}
          size={30}
          color="rgba(0, 0, 0, 0.5)"
        />
      </TouchableOpacity>

      {maximized && (
        <View
          style={{
            width: '100%',
            padding: 15,
            backgroundColor: '#E7E7E7',
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
            gap: 10
          }}
        >
          <Text style={{ textAlign: 'center', color: '#727A8F' }}>
            Conteúdo
          </Text>
          <Text style={{ color: '#3F424C' }}>{content}</Text>

          <Text style={{ textAlign: 'center', color: '#727A8F' }}>
            Atividade de aula
          </Text>
          <Text style={{ color: '#3F424C' }}>{classActivity}</Text>

          <Text style={{ textAlign: 'center', color: '#727A8F' }}>
            Atividade de casa
          </Text>
          <Text style={{ color: '#3F424C' }}>{houseActivity}</Text>
        </View>
      )}
    </View>
  );
}
