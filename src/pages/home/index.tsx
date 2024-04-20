import { SafeAreaView, View, Text, ScrollView, TouchableOpacity, Button } from 'react-native';
import MainNewsCard from '../../components/main-news-card';
import SecondaryNewsCard from '../../components/secondary-news-card';
// import Animated from 'react-native-reanimated';
import styles from './styles';
import FormatDate from '../../utils/FormatDateNews';
import UserHeader from '../../components/user-header';
import Header from '../../components/header';

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

const imagesUrl = [
    'https://live.staticflickr.com/3868/14566055790_f191cb7ba5_b.jpg',
    'https://live.staticflickr.com/3868/14566055790_f191cb7ba5_b.jpg'
]

const randomText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam reprehenderit dolorem sit quasi ipsum dolorum aperiam ex repellat possimus quam fugit aspernatur dolores, natus esse tempore ea. Id, excepturi esse?'

const imagesUrlSec = [
    { id: '1', image: 'https://live.staticflickr.com/3868/14566055790_f191cb7ba5_b.jpg' },
    { id: '2', image: 'https://live.staticflickr.com/3868/14566055790_f191cb7ba5_b.jpg' },
    { id: '3', image: 'https://live.staticflickr.com/3868/14566055790_f191cb7ba5_b.jpg' },
    { id: '4', image: 'https://live.staticflickr.com/3868/14566055790_f191cb7ba5_b.jpg' }
]

export default function Home({ navigation }: any) {

    return (
        <SafeAreaView style={styles.safeAreaContainer} >

            <UserHeader />
            <Header />

            <MainNewsCard
                text='Meu texto aqui'
                Key='123'
                date={FormatDate('2024-04-09')}
                description='Minha descrição aqui'
                id='id_1'
                imageUrl={imagesUrl}
                title='meu titulo aqui'
                key={'1'}
                navigation={navigation}
                tag='Comunicado' />

            <ScrollView
                horizontal={true}
                style={{ flexGrow: 0 }}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false} >

                <View style={styles.buttonCategoryTagContainer} key={'tag' + 0}>
                    <TouchableOpacity style={[styles.buttonCategoryTag, { backgroundColor: 'gray' }]} >
                        <Text style={styles.buttonCategoryTagText}>
                            Todas
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            <ScrollView showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false} >
                <SecondaryNewsCard
                    text={randomText}
                    Key='124'
                    date={FormatDate('2024-04-09')}
                    description='Minha descrição aqui'
                    id='id_2'
                    imageUrl={imagesUrlSec}
                    title='meu titulo aqui'
                    key={'2'}
                    navigation={navigation}
                    tag='Comunicado' />

                {/* <Button title='Ir para LandingPage' onPress={() => navigation.navigate('LandingPage')} /> */}
            </ScrollView>


        </SafeAreaView>
    );
}
