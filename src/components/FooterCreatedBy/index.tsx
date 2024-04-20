import { Image, Text, View } from "react-native";
import styles from './styles'

export default function FooterCreatedBy() {

    return (
        <View style={styles.container}>
            <Text style={styles.text}> Desenvolvido por </Text>
            <Image style={styles.imageInsight} source={require('../../assets/Insight_logo.png')} />
            <Image style={styles.imageInfodat} source={require('../../assets/Infodat_logo.png')} />
        </View>
    )
}