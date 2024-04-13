import { useState } from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function RequestCard({ status }: { status: 0 | 1 | 2 | 3 | 4 }) {
  const [maximized, setMaximized] = useState<boolean>(false);

  function setStatusCustomization(status: 0 | 1 | 2 | 3 | 4) {
    const customization = {
      0: {
        text: 'Solicitado',
        backgroundColor: 'rgba(114, 122, 143, 0.2)',
        color: 'rgb(114, 122, 143)',
      },
      1: {
        text: 'Aguardando',
        backgroundColor: 'rgba(184, 144, 0, 0.2)',
        color: 'rgb(184, 144, 0)',
      },
      2: {
        text: 'Aprovado',
        backgroundColor: 'rgba(43, 189, 101, 0.2)',
        color: 'rgb(43, 189, 101)',
      },
      3: {
        text: 'Rejeitado',
        backgroundColor: 'rgba(189, 43, 43, 0.2)',
        color: 'rgb(189, 43, 43)',
      },
      4: {
        text: 'Finalizado',
        backgroundColor: 'rgba(64, 140, 213, 0.2)',
        color: 'rgb(64, 140, 213)',
      },
    };

    return customization[status];
  }

  return (
    <View
      style={{
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 15,
      }}
    >
      <TouchableOpacity
        onPress={() => setMaximized(!maximized)}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <View style={{ gap: 10 }}>
          <Text style={{ color: '#535353', fontWeight: 'bold', fontSize: 14 }}>
            João da Silva
          </Text>
          <Text
            style={{
              color: 'rgba(114, 122, 143, 0.75)',
              fontWeight: '600',
              fontSize: 11,
            }}
          >
            Categoria/Assunto
          </Text>
        </View>

        <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
          <View
            style={{
              gap: 10,
              alignItems: 'flex-end',
            }}
          >
            <View
              style={{
                backgroundColor: setStatusCustomization(status).backgroundColor,
                borderRadius: 50,
                paddingVertical: 5,
                paddingHorizontal: 20,
              }}
            >
              <Text
                style={{
                  color: setStatusCustomization(status).color,
                  fontSize: 12,
                }}
              >
                {setStatusCustomization(status).text}
              </Text>
            </View>
            <Text style={{ color: '#727A8F', fontSize: 12 }}>Dez 20</Text>
          </View>
          <View
            style={{
              padding: 3,
              borderRadius: 15,
              backgroundColor: 'rgba(114, 122, 143, 0.2)',
            }}
          >
            <Ionicons name={'chevron-up'} size={20} color="#727A8F" />
          </View>
        </View>
      </TouchableOpacity>

      {maximized && (
        <View style={{ marginTop: 30 }}>
          <Text>Conteúdo:</Text>
          <Text style={{ textAlign: 'justify' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            alias ducimus minima? Illo similique aperiam quo omnis iusto facere
            atque! Cupiditate, enim! Cupiditate reprehenderit repudiandae beatae
            repellendus, nisi commodi ducimus.
          </Text>
        </View>
      )}
    </View>
  );
}
