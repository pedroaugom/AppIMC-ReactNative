import { StyleSheet, Text, View } from "react-native";
import Formulario from "./Formulario/Formulario";
import Cabecalho from "./Cabecalho/Cabecalho";

const App = () => {
    return (
        <View style={style.container}>
            <View style={style.cabecalho}>
                <Cabecalho titulo="IMC"/>
            </View>

            <View style={style.main}>
                <Formulario/>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cabecalho: {
        height: 200,
        minWidth: '100%'
    },
    main: {
        flex: 1,
        backgroundColor: '#8fb2f4',
        minWidth: '100%',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        padding: 35
    }
})

export default App
