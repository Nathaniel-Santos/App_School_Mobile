import { TouchableOpacity, View, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import {
  getPaymentStatus,
  formateDate,
  getPaymentColor,
} from '../../utils/financeHandler';
import getFontSize from '../../utils/getFontSize';

export default function FinanceCardButton({
  name,
  status,
  value,
  date,
  barCode,
  type,
}: {
  name: string;
  status: number;
  value: number;
  date: string;
  barCode: string;
  type: string;
}) {
  const [bottomContainer, setBottomContainer] = useState<boolean>(false);

  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'column',
        padding: 15,
        backgroundColor: 'white',
        borderRadius: 10,
      }}
    >
      <TouchableOpacity
        onPress={() => setBottomContainer(!bottomContainer)}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            gap: 10,
            alignItems: 'center',
          }}
        >
          <View
            style={{
              borderRadius: 10,
              width: 50,
              height: 50,
              backgroundColor: getPaymentColor(status, date),
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Ionicons name={'cash-outline'} size={40} color="white" />
          </View>

          <View
            style={{
              flexDirection: 'column',
              gap: 5,
            }}
          >
            <Text
              style={{
                fontWeight: '600',
                fontSize: 12,
                color: '#535353',
              }}
            >
              {name}
            </Text>
            <Text
              style={{
                fontSize: 11,
                fontWeight: '600',
                color: getPaymentColor(status, date),
              }}
            >
              {getPaymentStatus(+status, date)}
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            gap: 10,
            alignItems: 'center',
          }}
        >
          <View
            style={{
              gap: 5,
              alignItems: 'flex-end',
            }}
          >
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 15,
              }}
            >
              R$ {value}
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: '#727A8F',
              }}
            >
              {formateDate(date)}
            </Text>
          </View>

          <View
            style={{
              backgroundColor: '#d3d7e0',
              width: 25,
              height: 25,
              borderRadius: 15,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Ionicons name={'chevron-up'} size={20} color="#727A8F" />
          </View>
        </View>
      </TouchableOpacity>

      {bottomContainer && (
        <View
          style={{
            marginTop: 10,
            width: '100%',
          }}
        >
          <View
            style={{
              marginBottom: 10,
            }}
          >
            <Text
              style={{
                fontWeight: '600',
                fontSize: 10,
                color: '#727A8F',
              }}
            >
              {type}
            </Text>
          </View>

          <Text
            style={{
              color: '#535353',
              fontSize: 12,
              fontWeight: '600',
            }}
          >
            Código de barras
          </Text>
          <Text
            style={{
              color: '#a6adbf',
              fontSize: 12,
              fontWeight: '600',
              marginBottom: 15,
            }}
          >
            {barCode || 'Código não disponível'}
          </Text>
          {!+status && (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <TouchableOpacity
                onPress={async () => {}}
                style={{
                  backgroundColor: '#d1d7e6',
                  paddingVertical: 10,
                  paddingHorizontal: 30,
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text style={{ color: '#727A8F', fontSize: getFontSize(13) }}>
                  Copiar
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={async () => {}}
                style={{
                  backgroundColor: '#6D85FF',
                  paddingVertical: 10,
                  paddingHorizontal: 30,
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text style={{ color: '#FFFFFF', fontSize: getFontSize(13) }}>
                  Gerar PDF
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      )}
    </View>
  );
}
