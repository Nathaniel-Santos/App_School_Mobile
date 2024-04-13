import 'react-native-gesture-handler'
import { TouchableOpacity, View, Text, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import secureLocalStorage from 'react-secure-storage';
import Animated, { SharedTransition, withSpring } from 'react-native-reanimated';
import styles from './styles';
import { SharedElement } from 'react-navigation-shared-element';
// import { useNavigation, createStaticNavigation } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

type IProps = {
  navigation?: any,
  imageUrl: any[];
  description: string;
  tag?: string;
  title: string;
  date: string;
  Key: string
  text?: string;
  id: string
}

export default function MainNewsCard({
  navigation,
  imageUrl,
  description,
  tag,
  title,
  date,
  Key,
  text,
  id
}: IProps) {

  const onPressCard = async () => {
    const newsData = { id: id, title: title, text: text, date: date, imageUrl: imageUrl }
    await AsyncStorage.setItem('noticia-selected', JSON.stringify(newsData))
    // secureLocalStorage.setItem('noticia-selected', newsData)
    // navigation.navigate('NoticiaPorAluno', { item: id + '1' })
    navigation.navigate('NoticiaPorAluno')
  }
  console.log('onPressCardItem: ', id + '1')
  console.log('ImageUrlMainNews: ', imageUrl)

  return (
    <View style={styles.elevation} key={'mainNewsContainerInside0' + Key} >
      <TouchableOpacity onPress={onPressCard} style={styles.touchableOpaticyContainer} >

        <View key={'primary_news' + Key} style={styles.cardViewContainer} >
            <Animated.Image
              sharedTransitionTag={id + '1'}
              source={{ uri: imageUrl[0] }}
              style={styles.imageView}
              resizeMode="cover"
              key={Key}
            />
          <LinearGradient colors={['transparent', 'rgba(0, 0, 0, 0.8)']} style={styles.linearGradient} />

          <View style={styles.infoContainer} key={'mainNews_details_container'} >
            {
              tag !== '' && tag !== undefined ?
                <View style={styles.tagActivated} key={'mainNews_details_container_tag'} >
                  <Text style={styles.tagInactivated} key={'mainNews_details_tag'}>
                    {tag}
                  </Text>
                </View> : <></>
            }
            <Text style={styles.titleText} key={'mainNews_details_title'} >
              {title}
            </Text>
          </View>
        </View>

        {/* Footer Container */}
        <View style={styles.footContainer} key={'mainNews_details_container_description' + Key} >
          <Text style={styles.footDescriptionText} key={'mainNews_details_description' + Key}>
            {description}
          </Text>

          <View style={styles.dateContainer} key={'mainNews_details_container_date' + Key}>
            <Text style={styles.dateText} key={'mainNews_details_date' + Key} >
              {date}
            </Text>
          </View>
        </View>

      </TouchableOpacity>
    </View>
  );
}