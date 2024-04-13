import { SafeAreaView, View, Text, ScrollView, TouchableOpacity, Image, Dimensions, Easing, FlatList } from 'react-native';
import getFontSize from '../../utils/getFontSize';
import NewsSlider from '../../components/news-slider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCallback, useEffect, useRef, useState } from 'react';
import Animated, { ReduceMotion, SharedTransition, interpolate, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';
import { SharedElement } from 'react-navigation-shared-element';

const { width, height } = Dimensions.get('screen')

type INewsData = {
    id: string;
    title: string;
    text: string;
    imageUrl: string[];
    date: string
}

export default function NoticiasPorAluno(props: any) {
    const { item } = props.route.params;
    const itemParam = item
    // console.log('ITEM_PARAM: ', itemParam)
    const [newsData, setNewsData] = useState<INewsData | null>(itemParam)
    const opacity = useSharedValue(0)
    const xPosition = useSharedValue(-100)
    const [loading, setLoading] = useState(true);

    const [countIndex, setCountIndex] = useState(1)

    const flatListRef: any = useRef();          // a reference of flatList to call its scrollToIndex function
    const indexRef: any = useRef(0);



    let countScroll = 1

    const getNewsData = async () => {
        const dataNews: any = await AsyncStorage.getItem('noticia-selected')
        setNewsData(JSON.parse(dataNews))
    }
    console.log('ItemParam_ImageUrl: ', `${itemParam.imageUrl}`, ' type: ', typeof (itemParam.imageUrl), ' Leng: ', newsData?.imageUrl.length)

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

    const onScroll = (event: any) => {
        const ind = event.nativeEvent.contentOffset.x / width;
        const roundIndex = Math.round(ind);
        indexRef.current = roundIndex;
    }

    const startCarousel = () => {
        console.log('CountScroll: ', countScroll)
        console.log('CountIndex: ', countIndex)
        console.log('loading: ', loading)
        if (!loading) {
            // if data has been loaded, call setInterval
            
            if (countScroll < newsData?.imageUrl.length) {
                setInterval(() => {
                    // scroll flatList to next index after every 3 sec. 
                    flatListRef.current?.scrollToIndex({ animated: true, index: countIndex %19 });
                    countScroll++
                    setCountIndex(countScroll)
                }, 3000);
            } else {
                countScroll = 0
                setCountIndex(countScroll)
                setInterval( () => {
                    flatListRef.current?.scrollToIndex({ animated: true, index: 0 %19 });
                }, 3000)

            }
        }
    }

    useEffect(() => {                      //here startCarousel will be called when state of loading changes
        startCarousel();
    }, [loading]);

    useEffect(() => {
        startCarousel()
    }, [countIndex])

    useEffect(() => {
        getNewsData()
        opacity.value = withSpring(opacity.value + 1, { duration: 3500 })
        xPosition.value = withSpring(xPosition.value + 100, { duration: 4500, clamp: { max: 0, min: 0 }, velocity: 50 })
        setLoading(false)
    }, [])


    return (
        <SafeAreaView
            style={{
                backgroundColor: 'white',
                width: width,
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

            <FlatList
                data={newsData?.imageUrl}
                scrollEnabled
                showsHorizontalScrollIndicator={false}
                horizontal
                ref={flatListRef}
                onScroll={onScroll}
                renderItem={({ item }: any) => {
                    if (item.id === '1') {
                        return <SharedElement id={`item.${itemParam.id}.photo`}>
                            <Image
                                style={{ width: width, height: height * 0.4 }}
                                source={{ uri: item.image }}
                                // sharedTransitionTag={`item.${item.id}.photo`}
                                key={'animated_img_13214'} />
                        </SharedElement>
                    } else {
                        return <Image
                            style={{ width: width, height: height * 0.4 }}
                            source={{ uri: item.image }}
                            // sharedTransitionTag={`item.${item.id}.photo`}
                            key={'animated_img_13214'} />
                    }
                }
                }
            />


            {/* <Carousel
                loop
                width={width}
                height={width / 2}
                autoPlay={newsData?.imageUrl?.length! > 1}
                data={newsData?.imageUrl! || ['']}
                scrollAnimationDuration={3000}
                autoPlayInterval={5000}
                customAnimation={animationStyle}
                // onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ item, index }: any) => {
                    if (count === 0) {
                        count++
                        return (
                            <SharedElement id={`item.${JSON.stringify(itemParam.id)}.photo`}>
                                <Image
                                    source={{ uri: JSON.stringify(itemParam.imageUrl) }}
                                    style={{ width: '100%', height: '100%' }}
                                    resizeMode="cover"
                                    key={'animated_img_13214'}
                                />
                            </SharedElement>
                        )
                    } else {
                        return (
                            <Image
                                source={{ uri: item }}
                                key={index}
                                style={{ flex: 1 }}
                                resizeMode="cover" />
                        )
                    }
                }
                }
            /> */}





            <Animated.View style={{ flex: 1, opacity, width: '100%', translateY: xPosition, padding: 10, gap: 10 }}>
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
                        <Text>Face</Text>
                        {/* <Ionicons name={'logo-facebook'} size={20} color="#6D85FF" /> */}
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>Instagram</Text>
                        {/* <Ionicons name={'logo-instagram'} size={20} color="#6D85FF" /> */}
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>Web</Text>
                        {/* <Ionicons name={'globe'} size={20} color="#6D85FF" /> */}
                    </TouchableOpacity>
                </View>
            </Animated.View>
        </SafeAreaView>
    );
}







{/* 
            <SharedElement id={`item.${item.id}.photo`}>
                <Image
                    style={{ width: width, height: height * 0.4 }}
                    source={{ uri: "https://live.staticflickr.com/3868/14566055790_f191cb7ba5_b.jpg" }}
                    // sharedTransitionTag={`item.${item.id}.photo`}
                    key={'animated_img_13214'} />
            </SharedElement> */}