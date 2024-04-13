import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import getFontSize from '../../../../utils/getFontSize';
import Ionicons from '@expo/vector-icons/Ionicons';
import NewsSlider from '../../../../components/news-slider';
import * as SecureStore from 'expo-secure-store';
import { useEffect, useState } from 'react';
import { useGlobalSearchParams, useLocalSearchParams } from 'expo-router';
import Animated from 'react-native-reanimated';

type INewsData = {
  id: string;
  title: string;
  text: string;
  imageUrl: string;
  date: string
}

export default function NewsPerId() {
  const [newsData, setNewsData] = useState<INewsData | null>()
  
  const getNewsData = async () => {
    const dataNews: any = await SecureStore.getItemAsync('news-per-id')
    setNewsData(JSON.parse(dataNews))
  }
  
  useEffect(() => {
    getNewsData()
  }, [])

  console.log('news-per-id: ', newsData?.id)

  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
        width: '100%',
        flex: 1,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        overflow: 'hidden',
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        elevation: 5, // Android
      }}
    >
      <Animated.View sharedTransitionTag={newsData?.id}>
        <NewsSlider imageUrl={newsData?.imageUrl} id={newsData?.id} />
      </Animated.View>

      <View style={{ flex: 1, width: '100%', padding: 10, gap: 10 }}>
        <Text
          style={{
            textAlign: 'justify',
            fontSize: getFontSize(24),
            color: '#727A8F',
          }}
        >
          {newsData?.title}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              backgroundColor: '#BC509A',
              borderRadius: 50,
              paddingVertical: 5,
              paddingHorizontal: 10,
              shadowColor: 'rgba(0,0,0, .4)', // IOS
              shadowOffset: { height: 1, width: 1 }, // IOS
              shadowOpacity: 1, // IOS
              shadowRadius: 1, //IOS
              elevation: 5, // Android
            }}
          >
            <Text style={{ color: 'white', fontSize: getFontSize(10) }}>
              Eventos
            </Text>
          </View>
          <Text
            style={{
              color: 'rgba(114, 122, 143, 0.7)',
              fontSize: getFontSize(12),
            }}
          >
            {newsData?.date}
          </Text>
        </View>

        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <Text style={{ textAlign: 'justify', color: '#727A8F' }}>
            {newsData?.text}
          </Text>
        </ScrollView>

        <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
          <Text style={{ color: '#727A8F', fontSize: getFontSize(12) }}>
            Nos encontre em:
          </Text>
          <TouchableOpacity>
            <Ionicons name={'logo-facebook'} size={20} color="#6D85FF" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name={'logo-instagram'} size={20} color="#6D85FF" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name={'globe'} size={20} color="#6D85FF" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
