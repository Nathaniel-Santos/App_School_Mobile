import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator
} from 'react-native';
import MainNewsCard from '../../../../components/main-news-card';
import SecondaryNewsCard from '../../../../components/secondary-news-card';
import { useCustomization } from '../../../../context';
import * as SecureStore from 'expo-secure-store';
import { useEffect, useState } from 'react';
import useFetcher from '../../../../utils/useFetcher';
import Animated from 'react-native-reanimated';

type IThumb = {
  url: string,
  Url: string,
  name: string
}

type INews = {
  id_noticias: number,
  titulo: string,
  resumo: string,
  texto: string,
  created_by: string,
  created_at: string,
  updated_at: string | null,
  tipo: number,
  thumb: [IThumb]
}

export default function News() {
  const menuTagColor = useCustomization(state => state.menuTagsColor);
  const [dbName, setDbName] = useState<string | null>('')

  const {
    data: newsData,
    fetchData: getNewsData,
    loading: newsIsLoading,
    status } = useFetcher({
      resource: '/news',
      method: 'get',
      configs: {
        headers: {
          selecteddb: dbName
        }
      }
    })

  const formatDate = (date: string) => {
    const shortDate = date.slice(0, 10)
    const dayNamePtBr = new Date(shortDate).toLocaleDateString('pt-BR', { weekday: 'long' }).split(',')[0];
    const monthNamePtBr = new Date(shortDate).toLocaleDateString('pt-BR', { month: 'long' });
    const monthNumber = new Date(shortDate).toLocaleDateString().split('/')[1];
    const yearNumber = new Date(shortDate).toLocaleDateString().split('/')[2];
    const fullDateStr = `${dayNamePtBr}, ${monthNumber} de ${monthNamePtBr} ${yearNumber}`
    return fullDateStr
  }

  const renderMainNews = () => {
    const lastNews = newsData?.filter((itm: any, index: any) => index === newsData.length - 1)

    if (lastNews.length > 0) {
      console.log('lastNews: ', lastNews)

      return lastNews?.map((item: INews, idx: string) => {
        return (
          <View key={'shdaksjhdalkdjadasjkldh'}>
            <MainNewsCard
              title={item.titulo}
              description={item.resumo}
              date={formatDate(item.created_at)}
              tag='Destaque'
              imageUrl={item.thumb.map(item => item.url || item.Url)} //temp1[0].thumb.map(item => item.url)
              Key={'mainNews_0_' + idx}
              text={item.texto}
              id={'id_'+item.id_noticias} 
            />
          </View>
        )
      })
    } else {
      return <></>
    }
  }

  useEffect(() => {
    SecureStore.getItemAsync('db_name')
      .then((result) => {
        setDbName(result)
      })
  }, [])

  useEffect(() => {
    if (dbName !== '') {
      Promise.resolve(getNewsData())
    }
  }, [dbName])

  return (
    <SafeAreaView
      style={{
        paddingHorizontal: 10,
        flexDirection: 'column',
        gap: 10,
        flex: 1,
        backgroundColor: '#F5F7F9'
      }}
    >

      {
        newsIsLoading === false ? renderMainNews() : <></>
      }

      <ScrollView
        horizontal={true}
        style={{ flexGrow: 0 }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ flexDirection: 'row', gap: 10 }} key={'tag' + 0}>
          <TouchableOpacity
            style={[styles.buttonCategoryTag, { backgroundColor: menuTagColor || 'gray' }]}
          >
            <Text style={{ color: 'white', fontSize: 13, fontWeight: '400' }}>
              Todas
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={{ flex: 1, paddingBottom: 10 }} key={'view_scroll_secondary_container'}>
        <ScrollView
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <View
            key={'view_secondary_container' + 1}
            style={styles.containerScrollSecondaryCard}
          >
            {
              newsIsLoading === false ?
                newsData // Retorna todas as noticias removendo apenas a 1°
                  ?.filter((itm: any, index: number) => index !== newsData.length - 1)
                  ?.map((item: INews, idx: string) => {
                    return (
                      <Animated.View
                      key={'post'+idx}
                      // sharedTransitionTag={JSON.stringify(item.thumb[0].Url)}
                       style={styles.containerSecondaryNewsCard}>
                        <SecondaryNewsCard
                          title={item.titulo}
                          description={item.resumo}
                          date={formatDate(item.created_at)}
                          imageUrl={item.thumb.map(item => item.url || item.Url)}
                          text={item.texto}
                          key={'secondary_' + idx}
                          id={'id_'+item.id_noticias}
                        />
                      </Animated.View>
                    )
                  }) : 
                  <ActivityIndicator
                  size={36}
                  />
            }
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerScrollSecondaryCard: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    gap: 10
  },
  containerSecondaryNewsCard: {
    shadowOffset: { width: 10, height: 10 },
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOpacity: 1,
    elevation: 10,
    borderRadius: 35
  },
  buttonCategoryTag: {
    borderRadius: 50,
    paddingVertical: 5,
    paddingHorizontal: 15,
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 2, // Android
  }


})