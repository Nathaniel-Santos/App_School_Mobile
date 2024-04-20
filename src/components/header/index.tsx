import { Text, View, FlatList, Dimensions, TouchableOpacity, SafeAreaView } from "react-native";
import styles from "./styles";
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
const { width, height } = Dimensions.get('screen')

const widthIcon = 24
const heightIcon = 54

const DATA = [
    {
        id: 1,
        title: 'Noticias',
        rota: '/Home',
        icon: <MaterialIcons name="newspaper" color={'white'} size={widthIcon} />
    },
    {
        id: 2,
        title: 'Financeiro',
        rota: '/Financeiro',
        icon: <FontAwesome name="money" color={'white'} size={widthIcon} />
    },
    {
        id: 3,
        title: 'Documentos',
        rota: '/Documentos',
        icon: <FontAwesome name="folder-open" color={'white'} size={widthIcon} />
    },
    {
        id: 4,
        title: 'Chat',
        rota: '/Chat',
        icon: <MaterialIcons name="chat" color={'white'} size={widthIcon} />
    },
    {
        id: 5,
        title: 'Espaço',
        rota: '/Espaco',
        icon: <FontAwesome name="ticket" color={'white'} size={widthIcon} />
    },
];

export default function Header() {

    return (
        <SafeAreaView>
            <View style={{ width, height: height * 0.1 - 25, marginBottom: 5 }}>
                <FlatList
                    data={DATA}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }: any) => {
                        return (
                            <TouchableOpacity 
                            style={[styles.buttonContainer, styles.elevation, styles.shadowProp]} 
                            onPress={() => { }}>
                                <View style={{flex: 1, width: '100%', height: '100%', justifyContent: "center", alignItems: 'center'}}>
                                    {item.icon}
                                </View>
                                {/* <Text style={styles.buttonText}>{item.title}</Text> */}
                            </TouchableOpacity>
                        )
                    }}
                    keyExtractor={(item: any) => item.id}
                />
            </View>
        </SafeAreaView>
    )
}