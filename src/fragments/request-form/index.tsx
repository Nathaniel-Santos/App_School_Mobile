import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from 'react-native';

import { Picker } from '@react-native-picker/picker';
import { useEffect, useState } from 'react';
import { useAccountMode } from '../../../../context';

export default function RequestForm() {
  const [student, setStudent] = useState('Aline dos Santos');
  const [category, setCategory] = useState('Categoria 1');
  const [content, setContent] = useState('');
  const studentsList = useAccountMode((state) => state.studentsList);

  useEffect(() => {
    if (content.length >= 300) setContent((prev) => prev);
  }, [content]);

  return (
    <SafeAreaView
      style={{ width: '100%', paddingHorizontal: 10, flex: 1, gap: 10 }}
    >
      <View>
        <Text style={{ color: '#727A8F' }}>Selecione o aluno</Text>
        <Picker
          selectedValue={student}
          onValueChange={(itemValue, itemIndex) => setStudent(itemValue)}
        >
          {studentsList?.map((e, i) => (
            <Picker.Item key={i} label={e.Nome} value={e.Matricula} />
          ))}
        </Picker>
      </View>

      <View>
        <Text style={{ color: '#727A8F' }}>Selecione a categoria</Text>
        <Picker
          selectedValue={category}
          onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}
        >
          <Picker.Item label="Categoria 1" value="Categoria 1" />
          <Picker.Item label="Categoria 2" value="Categoria 2" />
        </Picker>
      </View>

      <View style={{ flex: 1, marginBottom: 25, gap: 5 }}>
        <Text style={{ color: '#727A8F' }}>Solicitação</Text>
        <View>
          <TextInput
            value={content}
            maxLength={300}
            onChangeText={(value) => setContent(value)}
            style={{
              width: '100%',
              borderRadius: 15,
              borderWidth: 1,
              padding: 10,
              borderColor: 'rgba(114, 122, 143, 0.4)',
              height: '100%',
              textAlign: 'justify',
              textAlignVertical: 'top',
            }}
            multiline
          />
        </View>
      </View>

      <View style={{ width: '100%', alignItems: 'flex-end' }}>
        <Text>{content.length}/300</Text>
      </View>

      <TouchableOpacity
        disabled={content.length === 0}
        style={{
          backgroundColor: '#00B83F',
          paddingVertical: 10,
          paddingHorizontal: 30,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 80,
          marginBottom: 10,
          opacity: content.length === 0 ? 0.5 : 1,
        }}
      >
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}>
          Confirmar
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
