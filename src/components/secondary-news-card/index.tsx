import styles from './styles';
import { TouchableOpacity, View, Image, Text, Modal, Dimensions, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCustomization } from '../../context';
import { SharedElement } from 'react-navigation-shared-element';
import Carousel from 'react-native-reanimated-carousel';
import 'react-native-gesture-handler'
import { useState } from 'react';

export default function SecondaryNewsCard({
  navigation,
  imageUrl,
  description,
  tag,
  title,
  date,
  Key,
  text,
  id
}: {
  navigation?: any,
  imageUrl: any[];
  description: string;
  tag?: string;
  title: string;
  date: string;
  Key?: string;
  text?: string;
  id: string;
}) {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [dataNews, setDataNews] = useState<any>([{ id: 1 }])
  const newsTagColor = useCustomization(state => state.newsTagColor);
  const item = id + '1'
  const width = Dimensions.get('window').width;

  const onPressCard = async () => {
    const newsData = { id: id, title: title, text: text, date: date, imageUrl: imageUrl }
    setDataNews([newsData])
    await AsyncStorage.setItem('noticia-selected', JSON.stringify(newsData))
    setModalOpen(!modalOpen)
    // navigation.push('NoticiaPorAluno', { item: newsData })
  }

  return (
    <TouchableOpacity onPress={onPressCard} style={styles.button} >

      <Modal visible={modalOpen} transparent={true} animationType='fade' >
        <View style={styles.modal} >
          <View style={[styles.modalContainer, styles.elevation, styles.shadowProp]}>
            <View style={{ flex: 1, borderTopLeftRadius: 15, borderTopRightRadius: 15, maxHeight: width / 2 }}>
              <Carousel
                loop
                width={width - 20}
                height={width / 2}
                autoPlay={imageUrl?.length! > 1}
                data={imageUrl || ['']}
                scrollAnimationDuration={2000}
                autoPlayInterval={2000}
                pagingEnabled={true}
                style={{ flex: 1, borderTopLeftRadius: 15, borderTopRightRadius: 15, maxHeight: width / 2 }}
                renderItem={({ item, index }: any) => {
                  return (
                    <Image
                      source={{ uri: item.image }}
                      key={index}
                      style={{ flex: 1, width: width - 20, height: '100%' }}
                      resizeMode="cover" />
                  )
                }
                }
              />
            </View>

            <View style={{
              flex: 1,
              width: '100%',
              height: '100%',
              justifyContent: 'flex-start',
              paddingVertical: 10,
              paddingHorizontal: 20
            }}>
              <Text style={{ fontWeight: 'bold', fontSize: 24, marginBottom: 15, textTransform: 'uppercase' }}>{title}</Text>
              <ScrollView>
                <Text style={{ fontSize: 16 }}>{text}</Text>
              </ScrollView>
              <TouchableOpacity onPress={onPressCard} style={{ backgroundColor: 'rgba(0,0,0,0.4)', width: '50%', borderRadius: 10, padding: 5, alignItems: 'center' }} >
                <Text style={{ color: 'white' }}>Fechar</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </Modal>

      <View key={'sub' + Key} style={styles.infoContainer} >

        <SharedElement id={`item.${id}.photo`}>
          <Image
            style={styles.image}
            source={{ uri: imageUrl[0].image }}
            // sharedTransitionTag={`item.${item.id}.photo`}
            resizeMode="cover"
            key={'animated_img_13214'} />
        </SharedElement>

        <LinearGradient colors={['transparent', 'rgba(0, 0, 0, 0.8)']} style={styles.linearGradiente} />

        <View style={styles.titleAndTagContainer} >
          {tag !== '' && tag !== undefined ?
            <View style={styles.tagContainer} >
              <Text style={styles.tagText}>
                {tag}
              </Text>
            </View> : <></>}

          <Text style={styles.titleText} >
            {title}
          </Text>
        </View>
      </View>

      <View style={styles.descriptionContainer} >
        <Text style={styles.descriptionText}>
          {description}
        </Text>
        <View style={styles.dateContainer}>
          <Text style={styles.dateText} >
            {date}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}