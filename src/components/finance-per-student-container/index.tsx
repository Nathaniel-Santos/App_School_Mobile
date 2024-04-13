import FinanceCardButton from '../finance-card-button';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import getFontSize from '../../utils/getFontSize';

export default function FinancePerStudentContainer({
  minimizedPayments,
}: {
  minimizedPayments: any[];
}) {
  const router = useRouter();

  return (
    <View
      style={{
        gap: 5,
      }}
    >
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 15,
          color: '#535353',
          paddingLeft: 5,
        }}
      >
        {minimizedPayments[0].Nome}
      </Text>

      <View
        style={{
          gap: 15,
          alignItems: 'center',
        }}
      >
        {minimizedPayments.map((e, i) => (
          <FinanceCardButton
            key={i}
            name={e.Nome}
            status={e.Quitado}
            value={e.Valor}
            date={e.Vencimento}
            barCode={e.CodBarras}
            type={e.tipo}
          />
        ))}

        <TouchableOpacity
          onPress={async () => {
            router.replace(`/home/fragments/finance-per-student/${minimizedPayments[0].Matricula}`)
          }}
          style={{
            backgroundColor: '#6D85FF',
            paddingVertical: 15,
            borderRadius: 78,
            width: '80%',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: '#FFFFFF', fontSize: getFontSize(16) }}>
            Ver mais
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
