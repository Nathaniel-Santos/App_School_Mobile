import 'react-native-gesture-handler'
import { View, Image, Dimensions, StyleSheet } from 'react-native';
import { useCallback } from 'react';
import Carousel from 'react-native-reanimated-carousel';
import Animated, { interpolate } from 'react-native-reanimated';
import { SharedElement } from 'react-navigation-shared-element';


export default function NewsSlider({ itemParams, imageUrl, id }: { itemParams?: any, imageUrl: string | any, id?: string }) {
  const width = Dimensions.get('window').width;
  let count = 0

  const animationStyle = useCallback((value: number) => {
    'worklet';
    //1 - Antes | 0 - Atual | -1 - Passou(Depois)
    const zIndex = interpolate(value, [-1, 0, 1], [10, 20, 30]);
    const scale = interpolate(value, [-1, 0, 1], [0.8, 1, 1]);
    const translateX = interpolate(
      value,
      [-2, 0, 1],
      [-width, 0, width],
    );
    const opacity = interpolate(value, [-0.75, 0, 1], [0, 1, 0]);

    return {
      transform: [{ translateX }, { scale }],
      zIndex,
      opacity,
    };
  }, []);

  console.log('imageUrlSlides: ', !!imageUrl?.length)
  console.log('idUrlSlides: ', id)
  // const { item } = route.params;
  // console.log('ItemParams: ', item)
  // console.log('id: ', id)

  return (
    <View style={styles.generalContainer} >
      <Carousel
        loop
        width={width}
        height={width / 2}
        autoPlay={imageUrl?.length > 1}
        data={imageUrl}
        scrollAnimationDuration={3000}
        autoPlayInterval={2000}
        customAnimation={animationStyle}
        // onSnapToItem={(index) => console.log('current index:', index)}
        renderItem={({ item, index }: any) => {
          if (count === 0) {
            count++
            return (
                <Animated.Image
                  sharedTransitionTag={id + '1'}
                  source={{
                    uri: item,
                  }}
                  style={{ width: '100%', height: '100%', position: 'absolute' }}
                  resizeMode="cover"
                />
            )
          } else {
            return (
              <Image
                source={{
                  uri: item,
                }}
                key={index}
                style={{ flex: 1 }}
                resizeMode="cover"
              />
            )
          }
        }
        }
      />
    </View>
  );
}


const styles = StyleSheet.create({
  generalContainer: {
    width: '100%',
    height: '40%'
  },
  container: {
    position: 'absolute',
    zIndex: 2,
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
})