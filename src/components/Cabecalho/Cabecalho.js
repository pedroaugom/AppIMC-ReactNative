import { Dimensions, StyleSheet, Text, View, Image } from "react-native";

import imc from "./img/imc.png";

const widthTela = Dimensions.get('screen').width

const Cabecalho = ({titulo}) => {
    
    return (
        <View style={style.cabecalho}>
            <Image source={imc} style={style.image}></Image>
            <Text style={style.titulo}>{titulo}</Text>
        </View>
    );

}

const style = StyleSheet.create({
    cabecalho: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },
    titulo: {
        fontSize: 60,
        fontWeight: 'bold',
        padding: 10,
        color: '#2a32a0',
        position: 'absolute',
        alignSelf: 'center',
        left: 0
    },
    image: {
        width: '100%',
        height: (549 / 976) * widthTela,
        position: 'absolute',
        top: 0
    }

})

export default Cabecalho