import { Text, StyleSheet, TouchableOpacity } from "react-native";

const Botao = ({titulo, click}) => {

    return (
        <TouchableOpacity style={style.botao} onPress={click}>
            <Text style={style.texto}>{titulo}</Text>
        </TouchableOpacity>
    );
}

const style = StyleSheet.create({
    botao: {
        backgroundColor: '#3c9e79',
        borderRadius: 5,
        padding: 15,
        justifyContent: 'center',
        margin: 10
    },
    texto: {
        textAlign: 'center',
        fontSize: 18,
        color: '#ffffff'
    }
})

export default Botao
