import { StyleSheet, Text, View } from "react-native";

const Cabecalho = ({titulo}) => {
    
    return (
        <View style={style.cabecalho}>
            <Text style={style.titulo}>{titulo}</Text>
        </View>
    );

}

const style = StyleSheet.create({
    cabecalho: {
        justifyContent: 'center',
        alignContent: 'center'
    },
    titulo: {
        fontSize: 60,
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 25,
        color: '#000000'
    }
})

export default Cabecalho