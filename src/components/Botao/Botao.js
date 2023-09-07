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
        backgroundColor: '#2a32a0',
        borderRadius: 10,
        padding: 20,
        justifyContent: 'center',
        marginTop: 10
    },
    texto: {
        textAlign: 'center',
        fontSize: 18,
        color: '#ffffff'
    }
})

export default Botao
