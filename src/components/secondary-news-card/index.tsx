import styles from './styles';
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native';
import getFontSize from '../../utils/getFontSize';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCustomization } from '../../context';
// import secureLocalStorage from 'react-secure-storage';
import { SharedElement } from 'react-navigation-shared-element';
import Animated from 'react-native-reanimated';
import 'react-native-gesture-handler'

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
  const newsTagColor = useCustomization(state => state.newsTagColor);
  const item = id + '1'

  const onPressCard = async () => {
    const newsData = { id: id, title: title, text: text, date: date, imageUrl: imageUrl }
    await AsyncStorage.setItem('noticia-selected', JSON.stringify(newsData))
    navigation.push('NoticiaPorAluno', { item: newsData })
  }

  return (
    <TouchableOpacity onPress={onPressCard} style={styles.button} >
      {/* <Image
          // sharedTransitionTag={item}
          source={{ uri: 'https://live.staticflickr.com/3868/14566055790_f191cb7ba5_b.jpg' }}
          style={styles.image}
          resizeMode="cover"
          key={'sharedElementKey_2'}
        /> */}

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