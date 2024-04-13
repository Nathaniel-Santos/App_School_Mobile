import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import FilesPerIdCard from '../../../../components/files-per-id-card';

export default function FilesPerId() {
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
          padding: 5,
        }}
      >
        <Text
          style={{
            color: '#727A8F',
            fontSize: 16,
          }}
        >
          Financeiro
        </Text>
      </View>

      <View style={{ flex: 1 }}>
        <ScrollView>
          <View style={{ gap: 10, paddingBottom: 10 }}>
            <FilesPerIdCard />
            <FilesPerIdCard />
            <FilesPerIdCard />
            <FilesPerIdCard />
            <FilesPerIdCard />
            <FilesPerIdCard />
            <FilesPerIdCard />
            <FilesPerIdCard />
            <FilesPerIdCard />
            <FilesPerIdCard />
            <FilesPerIdCard />
            <FilesPerIdCard />
            <FilesPerIdCard />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
