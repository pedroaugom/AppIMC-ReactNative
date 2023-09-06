import { Text, View } from "react-native";
import Formulario from "./Formulario/Formulario";
import Cabecalho from "./Cabecalho/Cabecalho";

const App = () => {
    return (
        <View>
            <View>
                <Cabecalho titulo="IMC"/>
            </View>

            <View>
                <Formulario/>
            </View>
        </View>
    );
}

export default App
