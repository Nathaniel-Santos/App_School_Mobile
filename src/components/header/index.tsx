import { Text, View, FlatList, Dimensions, TouchableOpacity, SafeAreaView, StyleSheet } from "react-native";
import styles from "./styles";
const { width, height } = Dimensions.get('screen')

const DATA = [
    {
        id: 1,
        title: 'Noticias',
        rota: '/Home',
        icon: ''
    },
    {
        id: 2,
        title: 'Financeiro',
        rota: '/Financeiro',
        icon: ''
    },
    {
        id: 3,
        title: 'Documentos',
        rota: '/Documentos',
        icon: ''
    },
    {
        id: 4,
        title: 'Chat',
        rota: '/Chat',
        icon: ''
    },
    {
        id: 5,
        title: 'Espaço',
        rota: '/Espaco',
        icon: ''
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
                            <TouchableOpacity style={styles.buttonContainer} onPress={() => { }}>
                                <Text style={styles.buttonText}>{item.title}</Text>
                            </TouchableOpacity>
                        )
                    }}
                    keyExtractor={(item: any) => item.id}
                />
            </View>
        </SafeAreaView>
    )
}